import { useState} from 'react'
import Navbar from '../Welcome/Navbar'
import { useAuthContext } from '../../hooks/useAuthContext'
 const SetTargets = () => {

  const { user } = useAuthContext()
  const [username, setUsername] = useState('')
  const [foodExpenses, setFoodExpenses] = useState('')
  const [clothingExpenses, setCloth] = useState('')
  const [rentalExpenses, setRent] = useState('')
  const [transportExpenses, setTransport] = useState('')
  const [emergencyFund, setEmergency] = useState('')
  const [insuarance, setInsuarance] = useState('')
  const [loan, setLoan] = useState('')
  const [error, setError] = useState('')
  
  // to submit the data 
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!user) {
      setError('You must be logged in')
      return
    }
    const budgetList ={ username, foodExpenses, rentalExpenses, clothingExpenses, transportExpenses, insuarance, emergencyFund, loan}
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(budgetList),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })                  
    const json = await response.json()
    if (response.ok){
        setUsername('')
        setFoodExpenses('')
        setCloth('')
        setRent('')
        setTransport('')       
        setInsuarance('')
        setEmergency('')
        setLoan('')
        setError('')
        console.log("New budget items has been added", json)         
    }
  }
  //const calc = Number(calcFood)
  return (
    <div>
      <div className='form'>
    <form onSubmit={handleSubmit}> 
    <div className='label-input'>
        <label>Username</label>
        <input
        type="text"
        onChange={(e) => {setUsername(e.target.value)}}
        value={username}
        />
    </div>
    <div className='label-input'>
        <label>Food Expenses</label>
        <input
        type='number' 
        onChange={(e) => {setFoodExpenses(e.target.value)}}
        value={foodExpenses}
        />
      </div>
      <div className='label-input'>

         <label>Clothing Expenses</label>
        <input
        type='number' 
        onChange={(e) => {setCloth(e.target.value)}}
        value={clothingExpenses}
        />
      </div>
      <div className='label-input'>
         <label>Rental Expenses</label>
        <input
        type='number' 
        onChange={(e) => {setRent(e.target.value)}}
        value={rentalExpenses}
        />
      </div>
      <div className='label-input'>
         <label>Transport Expenses</label>
        <input
        type='number' 
        onChange={(e) => {setTransport(e.target.value)}}
        value={transportExpenses}
        />
      </div>
      <div className='label-input'>

         <label>Emergency Fund</label>
        <input
        type='number' 
        onChange={(e) => {setEmergency(e.target.value)}}
        value={emergencyFund}
        />
        </div>
        <div className='label-input'>

        <label>Insuarance</label>
        <input
        type='number' 
        onChange={(e) => {setInsuarance(e.target.value)}}
        value={insuarance} 
        />
        </div>
        <div className='label-input'>

         <label>Loans</label>
        <input
        type='number' 
        onChange={(e) => {setLoan(e.target.value)}}
        value={loan}
        />
        </div>

          <button>Add Budget item</button>
          {error && <div className='error'>{error}</div>}
    </form>
    </div>
    <div>
      <Navbar />
    </div>
    </div>
  )
}
export default SetTargets
