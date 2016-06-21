const data = {
  '1': {
    id: '1',
    checkNo: 1234,
    payee: 'Subway',
    amount: 100,
    isVoid: true,
    status: 'Paid',
  },
  '2': {
    id: 2,
    checkNo: 7777,
    payee: 'Costco',
    amount: 100,
    isVoid: true,
    status: 'Paid',
  },
  '3': {
    id: 3,
    checkNo: 2222,
    payee: 'Wendy\'s',
    amount: 100,
    isVoid: true,
    status: 'Paid',
  },
}

export const getRows = () => new Promise((resolve, reject) => {
  console.log('getRows')
  if (true) {
    resolve(data)
  }
  else {
    reject(Error('It broke'))
  }
})

export const deleteRow = id => new Promise((resolve, reject) => {
  if (data[id]) {
    delete data[id]
    resolve()
  }
  else {
    reject(Error('It broke'))
  }
})

export const editRow = row => new Promise((resolve, reject) => {
  if (true) {
    row[row.id] = row
    resolve(true)
  }
  else {
    reject(Error('It broke'))
  }
})


