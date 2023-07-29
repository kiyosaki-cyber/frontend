import React from 'react'
import Navbar from '../Welcome/Navbar'
import { useEffect, useState} from 'react'
//importing budget details component
import BudgetDetails from '../../components/BudgetDetails'
import { useAuthContext } from '../../hooks/useAuthContext'

const ViewTargets = () => {

 const [budgetList, setBudgetList] = useState(null)
const { user } = useAuthContext()
  useEffect(() => {
      const fetchBudgetListItems = async () =>{
        // fetching the budget list items from the backend

       const budgetListItems = await fetch('/api/user', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
       })
       const json = await budgetListItems.json()
          if( budgetListItems.ok){
            setBudgetList(json)
          }
      }
      if(user) {
        fetchBudgetListItems()
      }
      
  }, [user])

  return (
    <>
    <div>
        <Navbar />
    </div >
    <div>
      {budgetList && budgetList.map((budgetList) => (
      <BudgetDetails key={budgetList._id} budgetList={budgetList} />
      ))}
    </div>
    </>
  )
}
 export default ViewTargets
