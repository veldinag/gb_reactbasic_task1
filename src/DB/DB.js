const DB = [
    {
        id: 1,
        name: 'Ivan',
        messages: [
            { id: 1, type: 'fromMe', text: `Hi, my friend!`, date: `25.08.2021, 16:33` },
            { id: 2, type: 'fromMe', text: `How are you?`, date: `25.08.2021, 16:33` },
            { id: 3, type: 'toMe', text: `Hello)))`, date: `25.08.2021, 16:34`},
            { id: 4, type: 'toMe', text: `I'm fine`, date: `25.08.2021, 16:34`}
        ]
    },
    {
        id: 2,
        name: 'Jhon',
        messages: [
            { id: 1, type: 'fromMe', text: `Hi, how are you!`, date: `24.08.2021, 12:15` },
            { id: 2, type: 'toMe', text: `Hi!`, date: `24.08.2021, 12:17` },
            { id: 3, type: 'toMe', text: `Not bed`, date: `24.08.2021, 12:17`},
            { id: 4, type: 'fromMe', text: `Where are you now?`, date: `24.08.2021, 12:18`}
        ]
    },
    {
        id: 3,
        name: 'Maria',
        messages: [
            { id: 1, type: 'toMe', text: `Hi, Alex. How are you!`, date: `17.08.2021, 10:15` },
            { id: 2, type: 'toMe', text: `I wana to meet you!`, date: `17.08.2021, 10:15` },
            { id: 3, type: 'toMe', text: `I need your help)))`, date: `17.08.2021, 10:16`},
            { id: 4, type: 'fromMe', text: `Hello, Maria!`, date: `17.08.2021, 10:21`},
            { id: 5, type: 'fromMe', text: `What happened?`, date: `17.08.2021, 10:21`},
        ]
    }
]

export default DB