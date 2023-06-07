'use client'

import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

ChartJS.register(ArcElement)

export default function MoodChart() {
    const [ avg, setAvg ] = useState(0)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const getVotes = async () => {
            const res = await fetch('/api/vote')
            const data = await res.json()

            const dataMap = data.map(votes => votes.moodnumber)
            const voteAvg = Math.trunc((dataMap.reduce((a, b) => a + b, 0) / data.length) * 20)

            setAvg(voteAvg)
            setLoading(false)
        }
        getVotes()
    }, [])

    let firstLoopColor = ''
    
    if(avg < 25) 
            firstLoopColor = 'rgb(255, 0, 0)'
    else if(avg <= 70 && avg >= 25)
            firstLoopColor = 'rgb(255, 230, 0)'
    else if(avg > 70)
        firstLoopColor = 'rgb(0, 250, 154)'
    else
            firstLoopColor = 'rgb(233, 233, 233)'
    

    console.log(firstLoopColor)

    const data = {
        datasets: [{
            data: [avg, (100 - avg)],
            backgroundColor: [
                firstLoopColor,
                'rgb(233, 233, 233)',
            ]
        }],
        borderWidth: 0,
    };

    const options = {
        aspectRatio: 1,
        events: []
    }

    const plugins = [
        {
            beforeDraw(chart) {
                const { width } = chart;
                const { height } = chart;
                const { ctx } = chart;
                ctx.restore();
                const fontSize = (height / 160).toFixed(2);
                ctx.font = `${fontSize}em sans-serif`;
                ctx.textBaseline = 'top';
                const text  = avg;
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2.15;
                ctx.fillText(text, textX, textY);
                ctx.save();
            },
       },
    ]

    return (
        <div className="flex flex-col items-center mt-10 border-2 shadow-md m-auto w-fit p-5">
            <div>
                <h1 className="font-bold">Overall Happiness for the Week</h1>
            </div>
            <div className="my-2">
                { loading ? <h1>Loading..</h1> : <Doughnut data={data} plugins={plugins} options={options} /> }
            </div>
        </div>
    )
}
