import React from 'react'
const BudgetDetails = ({budgetList}) => {
    
  return (
    <div className='budgetDetails'>
      <div>
        <p><strong>Username:</strong><span>{budgetList.username}</span></p>
        <p><strong>Total Food Expenses:</strong><span>{budgetList.foodExpenses}</span></p>
        <p><strong>Total Rent Expenses:</strong><span>{budgetList.rentalExpenses}</span></p>
       
      </div>
      <div>
        <p><strong>Total Clothing Expenses:</strong><span>{budgetList.clothingExpenses}</span></p>
        <p><strong>Total Transport Expenses:</strong><span>{budgetList.transportExpenses}</span></p>
        <p><strong>Total Insuarance Cost:</strong><span>{budgetList.insuarance}</span></p>
       </div>
       <div>
        <p><strong>Total Loans Expenses:</strong><span>{budgetList.loan}</span></p>
        <p><strong>Total Emergency Funds:</strong><span>{budgetList.emergencyFund}</span></p>
        </div>
    </div>
  )
}

export default BudgetDetails