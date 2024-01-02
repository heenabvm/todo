import React from 'react'

export default function Que_3() {

    const str = "Hello world123 546";

    const arr = str.split(" ");

    const lenArray = [];
    arr?.map(word => {
        let len = word.length;
        lenArray.push(len);

        if (arr.length === lenArray.length) {
            let max = lenArray[0];

            for (let i = 0; i <= lenArray.length; i++) {
                if (lenArray[i] > max) {
                    max = lenArray[i];
                    return max;
                }
            }


        }
    })

    return (
        <div>
            {/* {arr} */}
        </div>
    )
}



