import React from "react";

import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from "../../assets/CHATpng.png"
const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div style={{width:"100%",height:"500px",marginTop:"100px"}}>
      
      <Row justify="center" style={{ height: "100%",width:"100%"}}>
        <Col span={8} style={{height:"100%",padding:"10px",paddingLeft:"55px",paddingRight:"55px",borderRadius:"45px",backgroundColor:"#f5f5f5" }}>
          <img src={img} style={{position:"absolute",height:"100px",width:"100px", borderRadius:"50%",top:"-50px",left:"200px"}}/>
          <Title style={{ textAlign: "center",fontSize:30,color:"#444654", marginBottom:60,marginTop:60 }} level={3}>
            New to ChatBox? Sign up! 
          </Title>
         
          <Button 
            style={{ width: "100%",color:"#ff7262",paddingTop:"5px",paddingBottom:"10px",height:50,fontSize:20 }}
            onClick={() => handleLogin(googleProvider)}
          >
           <FontAwesomeIcon icon={['fab', 'google']} style={{marginRight:"15px"}}/>  Continue with Google
          </Button>
          <Title style={{ textAlign: "center" }} level={4}>
            or
          </Title>
          <Button
            style={{ width: "100%",backgroundColor:"#1877f2",color:"white" ,paddingTop:"5px",paddingBottom:"10px",height:50,fontSize:20,marginTop:10  }}
            onClick={() => handleLogin(fbProvider)}
          >
        <FontAwesomeIcon icon={['fab', 'facebook']} style={{marginRight:"15px"}}/>    Continue with Facebook
          </Button>
          
        </Col>
      </Row>
    </div>
  );
}
