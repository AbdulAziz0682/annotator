let dummyUser = {
    name: 'UserName',
    email: 'email@gmail.com',
    password: 'Password123',
    company: 'company 1',
    token: 'abdcder0985djljsjkj38875',
    projects: [
        {
            name: 'Project_1',
            id: Number(new Date()),
            country: 'United States',
            status: 'Active',
            drawerOpen: false,
            states: [
                {   name: 'Start', 
                    onEnterFunctions: [
                        {type: 'onEnterFunction', name: 'add_action_to_list', data: [{actions: ['play_video', 'GET_INPUT'], params: ['Question.wav', 'audio ']}]},
                        {type: 'onEnterFunction', name: 'send_action_list', data: []},
                        {type: 'onEnterFunction', name: 'transition', data: []}
                    ], 
                    onInputFunctions: [
                        {type: 'onInputFunction', name: 'branch', data: [{actions: ['core', 'teo'], params: ['Response 1', 'Response 2']}]},
                    ]
                },
                {   name: 'End',
                    onEnterFunctions: [
                        {type: 'onEnterFunction', name: 'add_action_to_list', data: [{actions: ['play_video', 'GET_INPUT'], params: ['Question.wav', 'audio ']}]},
                        {type: 'onEnterFunction', name: 'send_action_list', data: []},
                        {type: 'onEnterFunction', name: 'transition', data: []}
                    ], 
                    onInputFunctions: [
                        {type: 'onInputFunction', name: 'branch', data: [{actions: ['core', 'teo'], params: ['Response 1', 'Response 2']}]},
                    ]
                }
            ],
            commands: [
                {name: 'NO_MATCH', phrases: [{language: 'English', audio: null, text: ''}]},
                {name: 'NO_INPUT', phrases: [{language: 'English', audio: null, text: ''}]},
                {name: 'PLAY_AUDIO', phrases: [{language: 'English', audio: null, text: ''}]},
            ],
            actions: [
                {name: 'GET_INPUT', parameters: [{name: 'param1', dataType: 'string'}, {name: 'param2', dataType: 'number'}]},
                {name: 'END_CONVO', parameters: [{name: 'param1', dataType: 'string'}, {name: 'param2', dataType: 'number'}]}
            ],
            metrics: [
                {name: 'Classification Accuracy(QA)', value: 'X'},
                {name: 'Classification Accuracy(Live)', value: 'X'},
                {name: 'Uptime', value: 'X'},
                {name: 'Avg. Request per minute', value: 'X'},
                {name: 'Avg. latency', value: 'X'},
                {name: 'Max. latency', value: 'X'},
            ],
            billing: {
                currentBalance: 5000.00,
                totalCost: 10.00,
                date: new Date(),
                graphData: {
                    //some data
                }
            },
            tabs: [
        
            ],
            currentTab: 0
        },
        {
            name: 'Project_2',
            id: Number(new Date())+1,
            country: 'United States',
            status: 'In developent',
            drawerOpen: false,
            states: [
                {name: 'Start'},
                {name: 'End'}
            ],
            commands: [
                {name: 'GET_INPUT', phrases: [{language: 'English', audio: null, text: ''}]},
                {name: 'END_CONVO', phrases: [{language: 'English', audio: null, text: ''}]},
                {name: 'PLAY_AUDIO', phrases: [{language: 'English', audio: null, text: ''}]},
            ],
            actions: [
                {name: 'NOT_MATCH', parameters: [{name: 'param1', dataType: 'string'}, {name: 'param2', dataType: 'number'}]},
                {name: 'NO_INPUT', parameters: [{name: 'param1', dataType: 'string'}, {name: 'param2', dataType: 'number'}]}
            ],
            metrics: [
                {name: 'Classification Accuracy(QA)', value: 'X'},
                {name: 'Classification Accuracy(Live)', value: 'X'},
                {name: 'Uptime', value: 'X'},
                {name: 'Avg. Request per minute', value: 'X'},
                {name: 'Avg. latency', value: 'X'},
                {name: 'Max. latency', value: 'X'},
            ],
            billing: {
                currentBalance: 5000.00,
                totalCost: 10.00,
                date: new Date(),
                graphData: {
                    //some data
                }
            },
            tabs: [

            ],
            currentTab: 0
        }
    ]
}

export default dummyUser;