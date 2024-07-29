function Stopwatch(){
        let time = 0;
        let starttime = 0;
        let endtime = 0;
        let duration = 0;

        this.start = function(){
            if (!(starttime == 0))
                throw new Error('start time is already started');
            starttime = new Date();
        },

        this.stop = function(){

            if (!(endtime == 0))
                throw new Error('stop time is already stopped');
           endtime = new Date();
        },

        this. reset = function(){
            time = 0;
            starttime = 0;
            endtime = 0;
            duration = 0;
        }
        Object.defineProperty(this, 'duration', {
            get: function(){
                if(endtime == 0 && starttime == 0)
                    throw new Error('Turn on the timer first');
                time = (endtime.getTime() - starttime.getTime())/1000
                duration += time
                console.log(duration)
            }
        })

        // this.duration = function(){
        //     time = (endtime - starttime)/1000
        //     console.log(time)
        // }
}

