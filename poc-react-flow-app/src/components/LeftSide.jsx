import React, { useState } from 'react'

function LeftSide({
    addNode,
    updateNodes,
    nodes,
    edges,
    undo

}) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    // show all node anmd edges
    const showAll = () => {
        console.log('nodes', nodes)
        console.log('edges', edges)
    }

    return (

        <div className={`transition-all duration-300  bg-white text-gray-700 overflow-hidden flex gap-2` +
            (isCollapsed ? ' w-16' : ' w-2/12')
        }>
            <aside className="transition-all duration-300  bg-white text-gray-700 flex-col flex  border-r-2 border-gray-200">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="bg-sky-100 p-3 border-l-4 border-l-sky-600 text-sky-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                </button>

                <button className="bg-white p-3 border-l-0 border-sky-600 text-sky-600">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </button>

            </aside>
            <div className='p-2'>

                <h1 className='text-2xl font-bold mb-4 items-center flex border-b-2 border-gray-200 pb-2 '>
                    Toolbox
                </h1>

                {/* search box */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 rounded-lg border border-gray-300 mb-4"
                />
                <div>
                    <details className="mb-4 ">
                        <summary className="font-semibold cursor-pointer">Common</summary>
                        <div className='flex flex-wrap flex-col gap-2 p-2'>

                            <button onClick={() => addNode('Variable')} className="text-start font-bold bg-orange-50 hover:scale-105 duration-300 ease-in-out  text-gray-700 p-2 rounded mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.745 3A23.933 23.933 0 0 0 3 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 0 1 1.105.402l2.402 7.206a.75.75 0 0 0 1.104.401l1.445-.889m-8.25.75.213.09a1.687 1.687 0 0 0 2.062-.617l4.45-6.676a1.688 1.688 0 0 1 2.062-.618l.213.09" />
                                </svg>
                                Variable
                            </button>
                            <button onClick={() => addNode('Operation')} className="text-start font-bold bg-orange-50 hover:scale-105 duration-300 ease-in-out  text-gray-700 p-2 rounded mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                                </svg>
                                Operation
                            </button>
                            <button onClick={() => addNode('Condition')} className="text-start font-bold bg-orange-50 hover:scale-105 duration-300 ease-in-out  text-gray-700 p-2 rounded mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                </svg>
                                Conditions
                            </button>

                            <button onClick={() => addNode('Output')} className="text-start font-bold bg-orange-50 hover:scale-105 duration-300 ease-in-out  text-gray-700 p-2 rounded mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>

                                Output
                            </button>

                        </div>
                    </details>

                    <details className="mb-4">
                        <summary className="font-semibold cursor-pointer">Import</summary>
                        <div className='flex flex-wrap flex-col gap-2 p-2'>
                            <button onClick={() => addNode('ImportCsv')} className="text-start font-bold bg-sky-50 hover:scale-105 duration-300 ease-in-out  text-gray-700 p-2 rounded mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                Import CSV
                            </button>
                        </div>
                    </details>


                    <hr className="my-4" />

                    <details className="mb-4 ">
                        <summary className="font-semibold cursor-pointer">Actions</summary>
                        <div className='flex flex-col gap-2 p-2'>
                            <button onClick={() => updateNodes(nodes.slice(0, -1))} className="bg-red-50 text-gray-800 font-semibold p-2 rounded-lg mb-2">
                                Remove Last
                            </button>

                            <button onClick={() => updateNodes(nodes.slice(1))} className="bg-red-50 text-gray-800 font-semibold p-2 rounded-lg mb-2">
                                Remove First
                            </button>

                            <button onClick={undo} className="bg-red-50 text-gray-700 p-2 rounded-lg mb-2 font-semibold ">
                                Undo
                            </button>

                            <button onClick={() => updateNodes([])} className="bg-red-50 text-gray-700 p-2 rounded-lg mb-2 font-semibold ">
                                Clear All
                            </button>

                            <button onClick={showAll} className="bg-red-50 text-gray-700 p-2 rounded-lg mb-2 font-semibold ">
                                Show All
                            </button>

                        </div>
                    </details>


                </div>
            </div>

        </div>
    )
}

export default LeftSide