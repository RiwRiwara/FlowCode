import React, { useState } from 'react'

function RightSide({
    selectedNode,
    deleteThisNode

}) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    return (
        <div className={`transition-all duration-300 bg-white text-gray-700 p-4 overflow-hidden` +
            (isCollapsed ? ' w-16' : ' w-2/12')
        }>
            <div>
                <h1 className='text-2xl font-bold mb-4 items-center flex  justify-between border-b-2 border-gray-200 pb-2'>
                    {
                        !isCollapsed ? (
                            <svg
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="w-6 h-6 inline-block mr-2 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        ) : (
                            <svg
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                            </svg>
                        )
                    }

                    {
                        !isCollapsed ? 'Properties' : ''
                    }

                </h1>
                {
                    !isCollapsed ? (<>
                        <div className='flex flex-col flex-wrap gap-2'>
                            <div>
                                ID : {selectedNode?.id || 'N/A'}
                            </div>
                            <div>
                                Block name : {selectedNode?.data?.name || 'N/A'}
                            </div>
                            <div>
                                Type : {selectedNode?.type || 'N/A'}
                            </div>

                        </div>
                    </>) : (<></>)
                }

            </div>
        </div>
    )
}

export default RightSide