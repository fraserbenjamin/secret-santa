/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import tw from 'twin.macro';

const Button = tw.button`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none`;

const View = ({matches, reset}) => {
    const [progress, setProgress] = useState(0);
    const order = Object.entries(matches).map(item => item[0]);

    const show = progress %2 !== 0;

    return (
        <>
            <div tw="border-t border-gray-200 flex justify-end flex-col p-3">
                {!show && <div tw="text-xl font-medium text-center">Now for {order[Math.trunc(progress/2)]}</div>}
                {show && <div tw="text-xl font-medium"> Hey {order[Math.trunc(progress/2)]}, you have...</div>}

                <div tw="text-4xl py-3 text-center">{show && matches[order[Math.trunc(progress/2)]]}</div>

                {(progress < order.length*2-1) && <Button tw="m-2 bg-green-500 hover:bg-green-700" onClick={() => setProgress(progress + 1)}>Next</Button>}
                {(progress >= order.length*2-1) && <Button tw="m-2 bg-blue-500 hover:bg-blue-700" onClick={reset}>Done</Button>}
            </div>
        </>
    )
}

export default View;