import React from 'react'

export default function MoneyForm({addMoney}) {
    return (
        <div>
            <form onSubmit={addMoney}>
                <label>Add More Money Cuz you Hungry</label>
                <input type='number' name='amount'></input>
                <button>Add Them $$</button>
            </form>
        </div>
    )
}
