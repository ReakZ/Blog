import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import { Button,Form,Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 


const mapStateToProps = (state) => {
  const { users,stateUI,ModalRegistration } = state;

  return {
users,stateUI,ModalRegistration
  };
};

const actionCreators = {
registrationUser: actions.registrationUser,
modalEmail: actions.modalEmail,
modalNickname:actions.modalNickname,
closeModal:actions.closeModal,
setBox:actions.setBox,
setErrorMessage:actions.setErrorMessage,
userLogin:actions.userLogin,
messageUpdate:actions.messageUpdate
};


class ModalForRegistration extends React.Component {
    registrationUser=(e)=>{
    e.preventDefault()
    const {users,userLogin,messageUpdate,ModalRegistration,setErrorMessage,registrationUser,closeModal}=this.props
    
   if(!ModalRegistration.rule){
    setErrorMessage('Необходимо принять пользовательское соглашение')
    return
   }
     else if(users.find(x=>x.username===ModalRegistration.nickName) || users.find(x=>x.email===ModalRegistration.email)){
        setErrorMessage('Пользователь с такими данными уже зарегестрирован')
     }
     else {
         let idReg =users.length+1
        registrationUser({

            nickName:ModalRegistration.nickName,email:ModalRegistration.email,id:idReg
        })
        
        closeModal()
        const login={loginIs:true,loginName:ModalRegistration.nickName,userId:idReg,loginPassword:''}
        userLogin({login})
        messageUpdate({type:'primary',text:'Поздравляем с регистрацией'})
        setTimeout(()=> messageUpdate({type:null,text:''}),2000)
     }

   }
  
  handlerChangeEmail=(e)=>{
    const {modalEmail}=this.props
    modalEmail(e.target.value)
  }

  handlerChangeNickname=(e)=>{
    const {modalNickname}=this.props
    modalNickname(e.target.value)
  }

  handlerClose=(e)=>{
    const {closeModal}=this.props
    closeModal()
  }

  handlerBox=(e)=>{
    const {setBox}=this.props
    setBox()
  }

  render() {
   
    const {ModalRegistration}=this.props

    
   return (

<div style={{position:"absolute",width:100+'%'}} >
    <Modal show={ModalRegistration.isVisible} onHide={this.handlerClose}>
  <Modal.Header closeButton>
    <Modal.Title>Регистрация</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form onSubmit={this.registrationUser} >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Адрес электронной почты:</Form.Label>
    <Form.Control type="email"  value={ModalRegistration.email} onChange={this.handlerChangeEmail} required/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Логин:</Form.Label>
    <Form.Control type="text"  value={ModalRegistration.nickName} onChange={this.handlerChangeNickname} required/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Я принимаю пользовательское соглашение." checked ={ModalRegistration.rule} onChange={this.handlerBox}/>
  </Form.Group>
   <p style={{color:'red'}}>{ModalRegistration.errorMessage}</p>
  <Button variant="primary" type="submit">
    Зарегистрироваться 
  </Button>
</Form>
  </Modal.Body>
</Modal>
</div>
   )




  }
}

export default connect(mapStateToProps, actionCreators)(ModalForRegistration);
