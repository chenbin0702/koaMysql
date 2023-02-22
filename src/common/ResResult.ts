enum Code{
  SUCESS=200,
  SERVEERROR=500
}
class ResResult
{
  static success(data:any=undefined,msg:any=''){
   const code:Code=Code.SUCESS
   return {data,msg,code}
  }
  static fail(msg:any='')
  {
    const code:Code=Code.SERVEERROR
    return{msg,code}
  }
}
export let{success,fail}=ResResult