import React from 'react'

const BudgetDetails = ({budgetList}) => {
  
  return (
    <div className='budgetDetails'>
        <p><strong>Username:</strong>{budgetList.username}</p>
        <p><strong>Total Food Expenses:</strong>{budgetList.foodExpenses}</p>
        <p><strong>Total Rent Expenses:</strong>{budgetList.rentalExpenses}</p>
    
        <p><strong>Total Clothing Expenses:</strong>{budgetList.clothingExpenses}</p>
        <p><strong>Total Transport Expenses:</strong>{budgetList.transportExpenses}</p>
        <p><strong>Total Insuarance Cost:</strong>{budgetList.insuarance}</p>
       
        <p><strong>Total Loans Expenses:</strong>{budgetList.loan}</p>
        <p><strong>Total Emergency Funds:</strong>{budgetList.emergencyFund}</p>
    </div>
  )
}

export default BudgetDetails