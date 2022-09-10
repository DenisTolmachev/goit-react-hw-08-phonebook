"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[399],{5597:function(n,e,r){r.d(e,{II:function(){return w},R$:function(){return f},__:function(){return g},tN:function(){return x},vw:function(){return h},wP:function(){return b},x_:function(){return Z}});var o,a,t,i,s,d,l,m=r(168),c=r(6444),u=r(5705),p=r(3504),h=c.ZP.h1(o||(o=(0,m.Z)(["\n  text-align: center;\n"]))),x=(0,c.ZP)(u.l0)(a||(a=(0,m.Z)(["\n  max-width: 500px;\n  width: 80%;\n  margin: 0 auto;\n"]))),g=c.ZP.label(t||(t=(0,m.Z)(["\n  width: 100%;\n  margin-bottom: 10px;\n  font-weight: ",";\n  color: ",";\n  height: 22px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.secondary})),w=(0,c.ZP)(u.gN)(i||(i=(0,m.Z)(["\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  padding: 10px;\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  border: 1px solid transparent;\n  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,\n    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;\n  &.error {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.error})),f=c.ZP.div(s||(s=(0,m.Z)(["\n  color: ",";\n  margin-top: -15px;\n  font-size: 14px;\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.colors.error})),b=c.ZP.div(d||(d=(0,m.Z)(["\n  margin-top: 20px;\n  text-align: center;\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.m1}),(function(n){return n.theme.colors.secondary})),Z=(0,c.ZP)(p.rU)(l||(l=(0,m.Z)(["\n  color: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.fontWeights.bold}))},5399:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var o,a=r(5462),t=r(5705),i=r(9434),s=r(6379),d=r(3284),l=r(5597),m=r(184),c=RegExp(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/),u=d.Ry().shape({name:d.Z_().min(2).matches(c,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("No name provided."),email:d.Z_().email().required("No email provided."),password:d.Z_().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/(?=.*[0-9])/,"Password must contain a number.")}),p=function(){var n=(0,i.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.vw,{children:"Create Account"}),(0,m.jsx)(t.J9,{initialValues:{name:"",email:"",password:""},validationSchema:u,onSubmit:function(e,r){var o=r.resetForm,a={name:e.name,email:e.email,password:e.password};n((0,s.a$)(a)),o()},children:function(n){var e=n.values,r=n.touched,o=n.errors,t=n.isSubmitting,i=n.handleChange,s=n.handleBlur,d=n.handleSubmit;return(0,m.jsxs)(l.tN,{onSubmit:d,children:[(0,m.jsx)(l.__,{htmlFor:"name",children:"Name"}),(0,m.jsx)(l.II,{id:"name",name:"name",type:"text",placeholder:"Enter your name",value:e.name,onChange:i,onBlur:s,className:o.name&&r.name&&"error"}),o.name&&r.name&&(0,m.jsx)(l.R$,{children:o.name}),(0,m.jsx)(l.__,{htmlFor:"email",children:"Email"}),(0,m.jsx)(l.II,{id:"email",name:"email",type:"text",placeholder:"Enter your email",value:e.email,onChange:i,onBlur:s,className:o.email&&r.email&&"error"}),o.email&&r.email&&(0,m.jsx)(l.R$,{children:o.email}),(0,m.jsx)(l.__,{htmlFor:"password",children:"Password"}),(0,m.jsx)(l.II,{id:"password",name:"password",type:"password",placeholder:"Enter your password",value:e.password,onChange:i,onBlur:s,className:o.password&&r.password&&"error"}),o.password&&r.password&&(0,m.jsx)(l.R$,{children:o.password}),(0,m.jsx)(a.z,{type:"submit",disabled:t,children:"SignUp"})]})}}),(0,m.jsxs)(l.wP,{children:["Already have account? ",(0,m.jsx)(l.x_,{to:"/login",children:"Login"})]})]})},h=r(4270),x=r(168),g=r(6444).ZP.div(o||(o=(0,x.Z)(["\n  padding: 20px 50px;\n"]))),w=function(){return(0,m.jsxs)(g,{children:[(0,m.jsx)(h.q,{children:(0,m.jsx)("title",{children:"SignUp"})}),(0,m.jsx)(p,{})]})}}}]);
//# sourceMappingURL=399.05edbc1a.chunk.js.map