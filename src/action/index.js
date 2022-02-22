export const checkStatus = (status) => {
    console.log(status)
   return {
       type: "CHECKED_STATUS",
       payload: {
           status,
       }
   }
}