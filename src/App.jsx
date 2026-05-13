
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './Components/ProtectedRoute'

import Sidebar from './Components/Sidebar';
import PremiumMonthlyCancelledUsers from './Components/PremiumMonthlyCancelledUsers';
import FreeAllUsers from './Components/FreeAllUsers';
import RefferalFreeUsers from './Components/RefferalFreeUsers';
import UserDetailPointsHistory from './Components/UserDetailPointsHistory';
import PaymentRequests from './Components/PaymentRequests';
import PremiumUsers from './Components/PremiumUsers';
import MarketingAgents from './Components/MarketingAgents';
import PaymentRequestChat from './Components/PaymentRequestChat';
import UserDetailPaymentHistory from './Components/UserDetailsPaymentHistory';
import PremiumMonthlyTrialUsers from './Components/PremiumMonthlyTrialUsers';
import PremiumMonthlySubscribedUsers from './Components/PremiumMonthlySubscribedUsers';
import PremiumMonthlyExpiredUsers from './Components/PremiumMonthlyExpiredUsers';
import PremiumMonthlyRefundUsers from './Components/PremiumMonthlyRefundUsers';
import PremiumYearlyTrialUsers from './Components/PremiumYearlyTrialUsers';
import PremiumYearlySubscribedUsers from './Components/PremiumYearlySubscribedUsers';
import PremiumYearlyCancelledUsers from './Components/PremiumYearlycancelledUsers';
import PremiumYearlyExpiredUsers from './Components/PremiumYearlyExpiredUsers';
import PremiumYearlyRefundUsers from './Components/PremiumYearlyRefundUsers';
import ReferralMarketingUsers from './Components/ReferralMarketingUsers';
import Login from "./Components/Auth/Login";
import ForgotPassword from './Components/Auth/ForgotPassword';
import VerificationCode from './Components/Auth/VerificationCode';
import NewPassword from './Components/Auth/NewPassword';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/new-password" element={<NewPassword />} />

        {/* Protected Routes */}
        <Route path="/marketing-agents" element={
          <ProtectedRoute>
            <MarketingAgents />
          </ProtectedRoute>
        } />
        
        <Route path="/free-all-users" element={
          <ProtectedRoute>
            <FreeAllUsers />
          </ProtectedRoute>
        } />
        
        <Route path="/sidebar" element={
          <ProtectedRoute>
            <Sidebar />
          </ProtectedRoute>
        } />
        
        <Route path="/premium-monthly-cancelled-users" element={
          <ProtectedRoute>
            <PremiumMonthlyCancelledUsers />
          </ProtectedRoute>
        } />
        
     
        <Route path="/premium-monthly-expired-users" element={
          <ProtectedRoute>
            <PremiumMonthlyExpiredUsers />
          </ProtectedRoute>
        } />
     
        <Route path="/premium-monthly-refund-users" element={
          <ProtectedRoute>
            <PremiumMonthlyRefundUsers />
          </ProtectedRoute>
        } />


        <Route path="/refferal-free-users" element={
          <ProtectedRoute>
            <RefferalFreeUsers />
          </ProtectedRoute>
        } />
        
        <Route path="/referral-marketing-users" element={
          <ProtectedRoute>
            <ReferralMarketingUsers />
          </ProtectedRoute>
        } />
        
        <Route path="/premium-monthly-trial-users" element={
          <ProtectedRoute>
            <PremiumMonthlyTrialUsers />
          </ProtectedRoute>
        } />
        
        <Route path="/premium-monthly-subscribed-users" element={
          <ProtectedRoute>
            <PremiumMonthlySubscribedUsers />
          </ProtectedRoute>
        } />
        
        <Route path="/premium-yearly-trial-users" element={
          <ProtectedRoute>
            <PremiumYearlyTrialUsers />
          </ProtectedRoute>
        } />
        
        <Route path="/premium-yearly-subscribed-users" element={
          <ProtectedRoute>
            <PremiumYearlySubscribedUsers />
          </ProtectedRoute>
        } />
        
        <Route path="/premium-yearly-cancelled-users" element={
          <ProtectedRoute>
            <PremiumYearlyCancelledUsers />
          </ProtectedRoute>
        } />
        
   <Route path="/premium-yearly-expired-users" element={
          <ProtectedRoute>
            <PremiumYearlyExpiredUsers />
          </ProtectedRoute>
        } />

   <Route path="/premium-yearly-refund-users" element={
          <ProtectedRoute>
            <PremiumYearlyRefundUsers />
          </ProtectedRoute>
        } />

        <Route path="/user-detail-points-history" element={
          <ProtectedRoute>
            <UserDetailPointsHistory />
          </ProtectedRoute>
        } />
        
        <Route path="/payment-requests" element={
          <ProtectedRoute>
            <PaymentRequests />
          </ProtectedRoute>
        } />
        
        <Route path="/premium-users" element={
          <ProtectedRoute>
            <PremiumUsers />
          </ProtectedRoute>
        } />
        
        <Route path="/payment-request-chat" element={
          <ProtectedRoute>
            <PaymentRequestChat />
          </ProtectedRoute>
        } />
        
        <Route path="/user-details-payment-history" element={
          <ProtectedRoute>
            <UserDetailPaymentHistory />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App