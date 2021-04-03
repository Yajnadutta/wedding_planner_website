import React,{Component} from "react";
import {connect} from "react-redux";
import  * as actions from "./actions/actions";
import './App.css';
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const responseGoogle = (response) => {
    console.log(response);
  }
   

class App extends React.Component{

constructor(){
    super();
    this.state = {
        status : false,
        updatePopup : false,
        insertPopup : false
    };
};



 componentDidMount(){
    this.props.getProducts();
  };

  showPopup = (msg)=>{
    if(msg === "update"){
        this.setState({
            status : true,
            updatePopup:true,
            insertPopup:false
        })
    }

    if(msg === "insert"){
        this.setState({
            status : true,
            insertPopup:true,
            updatePopup:false
        })
    };
    
    
};
  deleteProduct = (p_id)=>{
      this.props.deleteProduct(p_id);
  };

  closePopup = ()=>{
    this.setState({
        status : false,
        insertPopup : false,
        updatePopup : false
    })
};

  save = ()=>{
    if(this.state.updatePopup){
      
      this.props.updateProduct({"p_id":this.refs.p_id.value,
                              "p_name":this.refs.p_name.value,
                              "p_cost":this.refs.p_cost.value});
    }else if(this.state.insertPopup){
      this.props.addProduct({"name":this.refs.name.value,
                                "email":this.refs.email.value,
                                "password":this.refs.password.value,
                                "gender":this.refs.male.value,
                                "gender":this.refs.female.value,
                                "city":this.refs.city.value,
                                "partner":this.refs.partner.value,
                                "mobile":this.refs.mobile.value,
                                "budget":this.refs.budget.value,
                                "wedding":this.refs.wedding.value});
      }
    this.closePopup();

};
  render(){
      
      return(
          
          <Container fluid id="pic" style={{fontSize:25}}>
        <Button className="float-right mt-4 btn-lg btn-success" onClick={ ()=>{this.showPopup("insert") }}>
        Register
    </Button>
        
        
        <Modal show={this.state.status}
               onHide={this.closePopup}
               size="lg"
               centered>
            <Modal.Header closeButton>
                <Modal.Title><h1>Register</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label> <h1>Name</h1></Form.Label>
                        <Form.Control type="text"
                                      placeholder="p id"
                                      ref="name"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text"
                                      placeholder="product name"
                                      ref="email"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="product cost"
                                      ref="password"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Gender</Form.Label>
                        <input type="radio" name="gen"
                                      ref="male" />Male
                        <input type="radio" name="gen"
                                      ref="female" />Female
                    </Form.Group>
                    <Form.Label>City</Form.Label>
                        <Form.Control type="text"
                                      placeholder="City"
                                      ref="city"></Form.Control>

                    <Form.Label>Partner Name</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Parterner Name"
                                      ref="partner"></Form.Control>
                     <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number"
                                      placeholder="Parterner Name"
                                      ref="mobile"></Form.Control>

                        <Form.Label>Budget</Form.Label>
                        <Form.Control type="number"
                                      placeholder="Budget"
                                      ref="budget"></Form.Control>
                        <Form.Label>Wedding Date</Form.Label>
                        <Form.Control type="date"
                                      placeholder="Wedding Date"
                                      ref="wedding"></Form.Control>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                 <Button variant="success" className="btm btn-block" onClick={()=>{this.save()}}>Register</Button>
                 
            </Modal.Footer>
        </Modal>


    </Container>
      )

  }

}
const receive=(state)=>{
    
    if(state.hasOwnProperty("status")){
        if(state.status.update === "success"){
            state.data.forEach((element,index)=>{
                if(element.p_id == state.status.record.p_id){
                    element.p_name = state.status.record.p_name;
                    element.p_cost = state.status.record.p_cost;
                }
            });
            
        };
        
        if(state.status.delete === "success"){
            let id = state.data.findIndex((element,index)=>{
                return element.p_id === state.status.p_id;
            })
            state.data.splice(id,1);
        }
        if(state.status.insert === "success"){
            state.data.push(state.status.record);
        }

    }
   
    return{
        data:state.data,
        status : state.status
    }
}
const send=(dispatch)=>{
    return{
      getProducts:()=>{ dispatch(actions.getProducts()) },
      deleteProduct : (id)=>{ dispatch(actions.deleteProduct({"p_id":id})) },
      addProduct : (record)=>{ dispatch(actions.addProduct(record)) },
      updateProduct : (record)=>{ dispatch(actions.updateProduct(record)) }
    }
}
export default connect(receive,send)(App);