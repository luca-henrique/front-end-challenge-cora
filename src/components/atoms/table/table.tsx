interface ITable{

  className?:string
  name?: string
  children:React.ReactNode
}



export const Table = ({className, children}:ITable) =>{
  return(
    <table className={`${className}`}>
      {children}
    </table>
  )

}
