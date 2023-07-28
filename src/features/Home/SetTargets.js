import { useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment } from './SetSlice'
import Navbar from '../Welcome/Navbar'
import { useAuthContext } from '../../hooks/useAuthContext'
 const SetTargets = () => {
  const count = useSelector ((state) => state.counter.count)
  const dispatch = useDispatch()
  const { user } = useAuthContext()
  const [calcFood, setCalcFood] = useState()
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
  const calc = Number(calcFood)
  return (
    <div>
      <div>
        <Navbar />
      </div>
    <form onSubmit={handleSubmit}>
      <input type='number' onChange={(e) =>{
        setCalcFood(e.target.value) }}
        value={calcFood} />
     
        <label>Username</label>
        <input
        type="text"
        onChange={(e) => {setUsername(e.target.value)}}
        value={username}
        />

         <label>Food Expenses</label>
        <input
        type='number' 
        onChange={(e) => {setFoodExpenses(e.target.value)}}
        value={foodExpenses}
        />

         <label>Clothing Expenses</label>
        <input
        type='number' 
        onChange={(e) => {setCloth(e.target.value)}}
        value={clothingExpenses}
        />

         <label>Rental Expenses</label>
        <input
        type='number' 
        onChange={(e) => {setRent(e.target.value)}}
        value={rentalExpenses}
        />
         <label>Transport Expenses</label>
        <input
        type='number' 
        onChange={(e) => {setTransport(e.target.value)}}
        value={transportExpenses}
        />

         <label>Emergency Fund</label>
        <input
        type='number' 
        onChange={(e) => {setEmergency(e.target.value)}}
        value={emergencyFund}
        />

        <label>Insuarance</label>
        <input
        type='number' 
        onChange={(e) => {setInsuarance(e.target.value)}}
        value={insuarance} 
        />

         <label>Loans</label>
        <input
        type='number' 
        onChange={(e) => {setLoan(e.target.value)}}
        value={loan}
        />

          <button>Add Budget item</button>
          {error && <div className='error'>{error}</div>}
    </form>
    
    <button onClick={() => dispatch(increment(calc))} >+</button>
    <p>{count}</p>
    <div>
      <Navbar/>
    </div>
    </div>
  )
}
export default SetTargets
