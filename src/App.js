import React from 'react'

import {Button} from 'antd'

class App extends React.Component {
    render() {
        const BOSS = '李云龙'
        return (
            <div>
                <h1>独立团，团长{BOSS}</h1>
                <Button type="primary">冲啊！</Button>
            </div>
        )
    }
}

export default App