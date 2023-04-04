import React from 'react'

function Alert()
{
    return (
        <div>
            <Alert color="info">
                <span>
                    <span className="font-medium">
                        Info alert!
                    </span>
                    {' '}Change a few things up and try submitting again.
                </span>
            </Alert>
        </div>
    )
}

export default Alert