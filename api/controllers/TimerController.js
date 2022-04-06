
module.exports = {
    timer: async function (req, res) {
        try {
            if (req.method === 'GET') {
                let task = await Task.find();
                let author = await Author.find();
                let timer = await Timer.find();
                return res.view('Demo/timer', { task, author, timer, timerfetch: false, deleted: false });
            }
            else {

            }
        } catch (error) {
            console.log("Error   :", error);
            return res.status(409).json({ message: 'Something went wrong!' });

        }
    },
    createTimer: async function (req, res) {
        try {
            if (!req.param('name')
                || !req.param('author')
                || !req.param('task')
            ) {
                return res.json({ message: 'All fields are mandatory' });
            }
            let task = await Task.findOne({ id: req.param('task') });
            let author = await Author.findOne({ id: req.param('author') });
            if (task || author) {
                let createObj = {
                    name: req.param('name'),
                    task: task.name,
                    author: author.name,
                }
                await Timer.create(createObj);
            }
            return res.json({ success: true, msg: "Timer created succesffuly" });

        } catch (error) {
            console.log("Error   :", error);
            return res.status(409).json({ message: 'Something went wrong!' });

        }
    },
    editTimer: async function (req, res) {
        try {
            if (req.method === 'GET') {
                let task = await Task.find();
                let author = await Author.find();
                let timer = await Timer.find();
                let timerfetch = await Timer.findOne({ id: req.param('id') });
                return res.view('Demo/timer', { task, author, timer, timerfetch, deleted: false });
            } else {
                if (!req.param('name')
                ) {
                    return res.json({ message: 'All fields are mandatory' });
                }
                let timerfetch = await Timer.findOne({ id: req.param('id') });
                if (timerfetch) {
                    updateObj = {
                        name: req.param('name'),
                    }
                    await Timer.update({ id: req.param('id') }, updateObj);
                    return res.json({ success: true, msg: "timer edit succesffuly" });
                }
            }
        } catch (error) {
            console.log("Error   :", error);
            return res.status(409).json({ message: 'Something went wrong!' });

        }
    },
    deleteTimer: async function (req, res) {
        try {
            let timerfetch = await Timer.findOne({ id: req.param('id') });
            if (timerfetch) {
                await Timer.destroyOne({ id: req.param('id') })
            }
            console.log(
                'hhuhuhuhu', timerfetch
            )
            let task = await Task.find();
            let author = await Author.find();
            let timer = await Timer.find();
            return res.view('Demo/timer', { task, author, timer, timerfetch: false, deleted: true });
        } catch (error) {
            console.log("Error   :", error);
            return res.status(409).json({ message: 'Something went wrong!' });

        }
    },
    updateTimer: async function (req, res) {
        try {
            if (!req.param('id')
                ||!(parseInt(req.param('hours'))>=0)
                ||!(parseInt(req.param('minutes'))>=0)
                ||!(parseInt(req.param('seconds'))>=0)) {
                return res.json({ message: 'All fields are mandatory' });
            }
            let timerfetch = await Timer.findOne({ id: req.param('id') });
            if (timerfetch) {
                updateObj = {
                    hours:parseInt(req.param('hours')),
                    minutes:parseInt(req.param('minutes')),
                    seconds:parseInt(req.param('seconds'))
                }
                await Timer.update({ id: req.param('id') }, updateObj);
                return res.json({ success: true, msg: "timer updated succesffuly" });
            }
        } catch (error) {
            console.log("Error   :", error);
            return res.status(409).json({ message: 'Something went wrong!' });
        }
    },
}