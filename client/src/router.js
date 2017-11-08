import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Import miscellaneous routes and other requirements
import NotFoundPage from './components/pages/not-found-page';
import Navbar from './components/template/navbar';
import Footer from './components/template/footer';
import Search from './components/template/search';
import ChatContainer from './components/chatbot/ChatContainer.jsx';
import ChatIcon from './components/chatbot/icons/ChatIcon.jsx';
import OpenBot from './components/chatbot/OpenBot.jsx';
// Import static pages
import HomePage from './components/pages/home-page';
import TestHomePage from './components/pages/test-home-page';
import ContactPage from './components/pages/contact-page';
import Forms from './components/pages/forms-page';
import FAQs from './components/pages/faqs-page';
import Portal from './components/pages/portal-page';
import SmallClaims from './components/pages/topics/smallclaims';
import Guardianship from './components/pages/topics/guardianship';
import Eviction from './components/pages/topics/eviction';
import Traffic from './components/pages/topics/traffic';
import Dv from './components/pages/topics/dv';
import FamilyHome from './components/pages/topics/family/family-home';
import Adoption from './components/pages/topics/family/family-adoption';

// import ComponentSamplesPage from './components/pages/component-samples';

// Import authentication related pages
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Register from './components/auth/register';
import ForgotPassword from './components/auth/forgot-password';
import ResetPassword from './components/auth/reset-password';

// Import profile pages
// import Profile from './components/profile/profile';
import ViewProfile from './components/profile/view-profile';
import MyCasesDashboard from './components/cases/my-cases-dashboard'; // import Inbox from './components/dashboard/messaging/inbox';
// import Conversation from './components/dashboard/messaging/conversation';
// import ComposeMessage from './components/dashboard/messaging/compose-message';
// import BillingSettings from './components/billing/settings';

// Import billing pages
// import InitialCheckout from './components/billing/initial-checkout';

// Import admin pages
// import AdminDashboard from './components/admin/dashboard';

// Import higher order components
import RequireAuth from './components/auth/require-auth';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <ToggleBox />*/}
          <div className={this.props.visible?"App noscroll":"App"}>
            <div className="App-mask" />
            <Navbar />
            <Search />
            <div className="position-bot the-bot">
              <OpenBot />
            </div>
            <div className={this.props.visible?"Page noscroll":"Page"}>
              <Switch>
              <Route exact path="/" component={ HomePage } />
              <Route path="/test" component={ TestHomePage } />
              <Route path="/contact-us" component={ ContactPage } />
              <Route path="/portal" component={ Portal } />
              <Route path="/my-case" component={ MyCasesDashboard } />
              <Route path="/register" component={ Register } />
              <Route path="/login" component={ Login } />
              <Route path="/logout" component={ Logout } />
              <Route path="/faqs" component={ FAQs } />
              <Route path="/forms" component={ Forms } />
              <Route path="/locations" component={ () => window.location = "http://www.cc-courts.org/locations/locations.aspx" }/>
              <Route path="/find-a-case" component={ () => window.location = "http://www.cc-courts.org/civil/online-case.aspx" }/>
              <Route path="/forgot-password" component={ ForgotPassword } />
              <Route path="/reset-password/:resetToken" component={ ResetPassword } />
              
              <Route path="/smallclaims" component={ SmallClaims } />
              <Route path="/guardianship" component={ Guardianship } />
              <Route path="/eviction" component={ Eviction } />
              <Route path="/dv" component={ Dv } />
              <Route path="/traffic" component={ Traffic } />
              <Route path="/family" component={ FamilyHome } />
              <Route path="/adoption" component={ Adoption } />

              <Route path="/profile" component={RequireAuth(ViewProfile)} />
              

              <Route path='*' component={ NotFoundPage } />
            </Switch>

            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => ({
  visible: state.chat.botVisibility
});

export default connect(mapStateToProps)(AppRouter);
/*


<BrowserRouter>
				<Route path="/" component={App}>
				    <Route path="/contact-us" component={ContactPage} />


				    <Route path="*" component={NotFoundPage} />
				</Route>
			</BrowserRouter>

*/

//	 <Route path="component-samples" component={RequireAuth(ComponentSamplesPage)} />
//	 <Route path="contact-us" component={ContactPage} />

//     <Route path="register" component={Register} />
//     <Route path="login" component={Login} />
//     <Route path="logout" component={Logout} />
//     <Route path="forgot-password" component={ForgotPassword} />
//     <Route path="reset-password/:resetToken" component={ResetPassword} />

//     <Route path="checkout/:plan" component={RequireAuth(InitialCheckout)} />
//     <Route path="billing/settings" component={RequireAuth(BillingSettings)} />
//     <Route path="admin" component={RequireAuth(AdminDashboard)} />

//     <Route path="dashboard">
//       <IndexRoute component={RequireAuth(Dashboard)} />
//       <Route path="inbox" component={RequireAuth(Inbox)} />
//       <Route path="conversation/new" component={RequireAuth(ComposeMessage)} />
//       <Route path="conversation/view/:conversationId" component={RequireAuth(Conversation)} />
//     </Route>

// <Route exact path="profile" />
// 					    <Route component={RequireAuth(Profile)} />

//     <Route path="profile" component={RequireAuth(ViewProfile)} />
