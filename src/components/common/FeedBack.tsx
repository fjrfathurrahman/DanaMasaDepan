const Feedback = (status: string, amount: []) => {

  switch (status) {
    case 'pending':
      return 'Loading...'
      
    case 'error':
      return 'Terjadi kesalahan'
    
    case 'success':
      return amount.length === 0 ? 'Data tidak ditemukan' : ''

    default:
      return '-'
  }

}

export default Feedback