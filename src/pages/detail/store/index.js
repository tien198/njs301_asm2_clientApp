import { create } from 'zustand'

const initialState = {
    date: [{
        startDate: new Date(), endDate: new Date(), key: 'selection'
    }],
    fullName: '',
    email: '',
    hotelId: '',
    fetchedRooms: [],
    // rooms: [{ roomId: '', roomNumbers: [''] }],
    checkedRooms: [],
    // bookedRooms: indicate rooms in boolean isbooked state with the same index
    // bookedRooms: [[isBookedRoom,isBookedRoom], [isBookedRoom]]
    // example: 
    //       bookedRooms[0] ---indicate--- rooms[0].roomNumbers
    bookedRooms: [],
    price: 0,
    payment: 'Credit',
    phone: '',
    cardNumber: '',
    totalBill: 0
}

const useStoreReserveForm = create(set => ({
    // dateRange value format (in DateRange library)
    date: initialState.date,
    setDate: (val) => set(() => ({ date: val })),

    fullName: initialState.fullName,
    setFullName: (val) => set(() => ({ fullName: val })),

    email: initialState.email,
    setEmail: (val) => set(() => ({ email: val })),

    hotelId: initialState.hotelId,
    setHotelId: (val) => set(() => ({ hotelId: val })),

    fetchedRooms: initialState.fetchedRooms,
    setFetchedRooms: (val) => set(() => ({ fetchedRooms: val })),

    // rooms: [{ roomId: '', roomNumbers: [''], price: 0 }],
    checkedRooms: initialState.checkedRooms,
    setCheckedRooms: (val) => set(() => ({ checkedRooms: val })),

    // bookedOuts: [{ roomId: '', roomNumbers: [''] }],
    // roomsList: [{ _id: '', roomNumbers: [''] }],
    // true: isBooked
    // fasle: otherwise
    bookedRooms: initialState.bookedRooms,
    setBookedRooms: (bookedOuts) => set((state) => {
        // ---- map => Array[]
        const newVal = state.fetchedRooms.map(fRoom => {
            const bItem = bookedOuts.find(i => i.roomId === fRoom._id)
            if (bItem)
                // ---- map => Boolean[]
                return fRoom.roomNumbers.map(rNum => {
                    const valNumbers = bItem.roomNumbers
                    return valNumbers.includes(String(rNum))
                })
            else
                // ---- map => Boolean[]
                return fRoom.roomNumbers.map(() => false)
        })
        return { bookedRooms: newVal }
    }),

    price: initialState.price,
    setPrice: (val) => set(() => ({ price: val })),

    payment: initialState.payment,
    setPayment: (val) => set(() => ({ payment: val })),

    phone: initialState.phone,
    setPhone: (val) => set(() => ({ phone: val })),

    cardNumber: initialState.cardNumber,
    setCardNumber: (val) => set(() => ({ cardNumber: val })),

    // totalBill mutate in onCheck event that setCheckedRooms
    // in - /detail/comps/reserveForm/RoomSelectionSection.jsx
    totalBill: initialState.totalBill,
    addToBill: (val) => set((state) => ({ totalBill: state.totalBill + val })),
    minusToBill: (val) => set((state) => ({ totalBill: state.totalBill - val })),

    resetForm: () => set(() => initialState)
}))

export default useStoreReserveForm