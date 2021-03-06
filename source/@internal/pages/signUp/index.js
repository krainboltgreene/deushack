// import React from "react"
// import {PureComponent} from "react"
// import PropTypes from "prop-types"
// import {connect} from "react-redux"
// import cxs from "cxs"
//
// import {Layout} from "@internal/ui"
// import {Button} from "@internal/elements"
// import {Form} from "@internal/elements"
// import {FormSection} from "@internal/elements"
// import {ButtonGroup} from "@internal/elements"
// import {onlyProps} from "@internal/selectors"
// import {dispatched} from "@internal/signals"
// import {signUpSignal} from "@internal/signals"
//
// const slug = "signUp"
// const style = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   flexWrap: "wrap",
//   paddingTop: 150,
//   paddingBottom: 150,
// }
// const sectionStyle = {minWidth: 320}
//
// export default connect(
//   onlyProps,
//   dispatched({signUp: signUpSignal})
// )(class SignUp extends PureComponent {
//   static propTypes = {signUp: PropTypes.func.isRequired}
//
//   render () {
//     const {signUp} = this.props
//
//     return <Layout subtitle="Join our website!" data-component="SignUp" style={style}>
//       <section id="logo" className={cxs(sectionStyle)}>
//         <img src="/llama-standing.png" alt="the cute llama mascot standing with tongue out" />
//       </section>
//
//       <Form name="SignUpForm" onSubmit={signUp} slug={slug} style={sectionStyle}>
//         <FormSection id="name" type="text" required label="Your name" slug={slug} />
//         <FormSection id="email" type="email" required label="Your email" slug={slug} />
//         <FormSection id="password" type="password" required label="A good password" slug={slug} />
//
//         <ButtonGroup>
//           <Button kind="primary" type="submit">
//             Make me a Lacquerista!
//           </Button>
//         </ButtonGroup>
//       </Form>
//     </Layout>
//   }
// })
