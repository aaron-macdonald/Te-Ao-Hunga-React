import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MemberRoutes from './Members/MemberRoutes.jsx'
// import EventRoutes from './Events/EventRoutes.jsx'
// import BenefitRoutes from './Benefit/BenefitRoutes.jsx'
// import AttachmentRoutes from './Attachment/AttachmentRoutes.jsx'
// import WhakapapaRoutes from './Whakapapa/WhakapapaRoutes.jsx'

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route
          path='/members'
          component={MemberRoutes}
        />
        {/* <Route
          path='/events'
          component={EventRoutes}
        />
        <Route
          path='/benefits'
          component={BenefitRoutes}
        />
        <Route
          path='/attachments'
          component={AttachmentRoutes}
        />
        <Route
          path='/whakapapa'
          component={WhakapapaRoutes}
        /> */}
      </Switch>
    </div>
  )
}
export default Main
