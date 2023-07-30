var MyCalendar = function() {
  this.ar=new Array();
  // 10-20
  // 20-30
  let isConflict = function(s1,e1,s2,e2){
      if(s2>=s1&&s2<e1)
          return true;
      if(e2>s1&&s2<=s1)
          return true;
      return false;
  }
  this.binary = function(st,ed){
      let low=0,high=this.ar.length-1,mid=parseInt((low+high)/2);
      while(low<=high){            
          mid=parseInt((low+high)/2);
          // console.log(mid)
          if(isConflict(this.ar[mid][0],this.ar[mid][1],st,ed))
              return -1;
          if(this.ar[mid][0]>st)
              high=mid-1;
          else if(this.ar[mid][0]<st)
              low=mid+1;            
      }
      if(this.ar[mid][0]<st)
          return mid+1;        
      return mid;
  }
};

/** 
* @param {number} start 
* @param {number} end
* @return {boolean}
*/
MyCalendar.prototype.book = function(start, end) {
  if(this.ar.length<=0){
      this.ar.push([start,end]);
      return true;
  }        
  let res=this.binary(start,end);
  if(res==-1) {
    return false;
  }
  this.ar.splice(res,0,[start,end]);
  return true;
  
};

/** 
* Your MyCalendar object will be instantiated and called as such:
* var obj = new MyCalendar()
* var param_1 = obj.book(start,end)
*/