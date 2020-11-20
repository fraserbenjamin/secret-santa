/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import tw from 'twin.macro';

const Button = tw.button`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none`;

const Person = ({name, remove}) => {
    return (
        <div tw="px-6 py-2 text-lg font-medium text-gray-900 cursor-pointer hover:bg-gray-300" onClick={remove}>
            {name}
        </div>
    )
}

const List = ({value:names, onChange, go}) => {
    const [input, setInput] = useState("");

    const addName = () => {
        if(input === "") return;
        const newNames = [...names, input];
        onChange(newNames);
        setInput("");
    }

    return (
        <>
            <div tw="border-t border-gray-200">
                {names.map((name, i) => <Person name={name} remove={() => onChange(prev => prev.filter(item => item !== name))} key={i}/>)}
            </div>

            <div tw="flex m-2">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} tw="m-2 focus:border-blue-500 block w-full border border-gray-300 rounded-md px-3 py-1 text-lg" placeholder="Name"/>
                <Button tw="m-2" onClick={addName}>Add</Button>
            </div>

            <div tw="border-t border-gray-200 flex justify-end">
                <Button tw="m-2 bg-green-500 hover:bg-green-700" onClick={go}>Go</Button>
            </div>
        </>
    )
}

export default List;