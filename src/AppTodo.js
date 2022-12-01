import React from "react";
import { TextField, Paper, Button, Grid} from "@mui/material";

class AppTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = { item: { title: "" } };       // 사용자의 입력을 저장할 오브젝트
        this.add = props.add;
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(this.state.item === thisItem);   // 동일함
        console.log(this.state.item);               // item 내부
        console.log(this.state.item.title);         // title의 value
    }

    onButtonClick = () => {
        this.add(this.state.item);
        this.setState({ item: { title: "" } });     
        console.log(this);                          // AppTodo
        console.log(this.add);                      // add 함수
        console.log(this.state);                    // item 객체명까지
        console.log(this.state.item);               // item 객체내부
    }

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter'){
            this.onButtonClick();
        }
    }

    render(){
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRighjt: 16 }}>
                        <TextField 
                            placeholder="Add Todo here" 
                            fullWidth
                            onChange={this.onInputChange}
                            onKeyPress={this.enterKeyEventHandler}
                            value={this.state.item.title} 
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button 
                            fullWidth color="secondary" 
                            variant="outlined"
                            onClick={this.onButtonClick}
                            >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        
        );
    }

}

export default AppTodo;
