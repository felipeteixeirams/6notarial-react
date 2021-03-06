const DropMenuItem = (props) => {
   let target = props.target === "true" ? "_black" : "_self";
   return (
      <a className="dropdown-item " href={props.href} target={target} rel="noopener noreferrer">
         {props.content}
      </a>
   )
}

export default DropMenuItem;