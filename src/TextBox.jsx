import  React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function TextBox(props)
{
    const [curContent,setContent] = React.useState({
        title : "",
        content : ""
    });
    const [gotCLicked,setClick] = React.useState(false);
    function handleClick()
    {
        setClick((prevValue)=>(!prevValue));
    }
    function handleChange(event)
    {
        const {name,value} = event.target;
        setContent((preValue)=>{
            return {
                ...preValue,
                [name] : value
            };
        });
    }
    return(
        <div>
            <form className="create-note">
                {gotCLicked && <input onChange={handleChange} name="title" placeholder="Title" value={curContent.title}/>}
                <textarea onChange={handleChange}  onClick={handleClick} name="content" placeholder="Take a note..." rows={gotCLicked?3:1}
                           value={curContent.content}/>
                <Zoom in={gotCLicked}>
                    <Fab onClick ={
                        (event) => {
                            props.add(event,curContent);
                            setContent({title: "",content:""});
                        }
                    } ><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default TextBox;