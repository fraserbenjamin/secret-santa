/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import {GlobalStyles} from 'twin.macro';

import List from "./List";
import View from "./View";

const App = () => {
    const [names, setNames] = useState(["Fraser", "Kane", "Liam", "Jess", "Hannah", "Charlotte", "Molly"]);
    const [screen, setScreen] = useState("LIST");
    const [matches, setMatches] = useState(null);

    const generatePairs = () => {
        let result = {}

        const usedNames = () => {
            return Object.entries(result).map(item => item[1]);
        }

        names.forEach((name) => {
            const newArray = names.filter(item => item !== name && !usedNames().includes(item));
            
            if(newArray.length > 0) {
                let randomNumber = Math.floor(Math.random() * newArray.length);
                result[name] = newArray[randomNumber];
            }
        });
        
        if(Object.entries(result).length !== names.length) return null;

        return result;
    }

    const match = () => {
        if(names.length < 2) return

        let solution = generatePairs();
        while(solution === null) {
            solution = generatePairs();
        }

        console.info(solution);
        setMatches(solution);
        setScreen("VIEW");
    }

    const reset = () => {
        setMatches(null);
        setScreen("LIST");
    }

    return (
        <div tw="min-h-screen flex items-center justify-center bg-blue-500 py-12 px-4 sm:px-6 lg:px-8">
            <GlobalStyles />
            <div tw="bg-white shadow overflow-hidden sm:rounded-lg">
                <div tw="px-4 py-5 sm:px-6">
                    <h3 tw="text-lg leading-6 font-medium text-gray-900">
                    Secret Santa Generator
                    </h3>
                    <p tw="mt-1 max-w-2xl text-sm text-gray-600">
                    Match people up for secret santa
                    </p>
                </div>

                {(screen === "LIST") && <List value={names} onChange={setNames} go={match}/>}
                {(screen === "VIEW") && <View matches={matches} reset={reset}/>}
            </div>
        </div>
    );
}

export default App;
