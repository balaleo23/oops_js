function Stopwatch(endtime =0, starttime =0 ,time =0, duration =0){
    
    // let endtime = 0;

    this.starttime = starttime; 
    this.endtime = endtime;
    this.time = time;
    this.duration = duration;
    this.stopflag = false

    // this.start = function(){
    //     if (!(starttime == 0))
    //         throw new Error('start time is already started');
    //     starttime = new Date();
    // },

    // this.stop = function(){

    //     if (!(endtime == 0))
    //         throw new Error('stop time is already stopped');
    //    endtime = new Date();
    // },

    // this. reset = function(){
    //     time = 0;
    //     starttime = 0;
    //     endtime = 0;
    //     duration = 0;
    // }
    Object.defineProperty(this, 'duration', {
        get: function(){
            if(this.endtime == 0 && this.starttime == 0)
                throw new Error('Turn on the timer first');
            time = (this.endtime.getTime() - this.starttime.getTime())/1000
            duration = 0
            duration += time
            console.log(duration)
        }
    })

    // this.duration = function(){
    //     time = (endtime - starttime)/1000
    //     console.log(time)
    // }
}


Stopwatch.prototype.stop = function(){
    if(this.endtime==0){
        this.endtime = new Date();
        this.time = 0;
    }
    
    // if(!( this.endtime== 0))
    //     throw new Error('stop time is already stopped');
    // this.endtime = new Date();
}


Stopwatch.prototype.start = function(){
    if(this.starttime   ==0){
        this.starttime = new Date();
    }


    // if(!( this.starttime== 0))
    
    //     throw new Error('stop time is already stopped');
    // this.starttime = new Date();
}


Stopwatch.prototype.reset = function(){
        this.time = 0;
        this.starttime = 0;
        this.endtime = 0;
        duration = 0;
}
