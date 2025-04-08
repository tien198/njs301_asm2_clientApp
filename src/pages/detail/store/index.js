import { create } from 'zustand'

const useStoreReserveForm = create(set => ({
    // dateRange value format (in DateRange library)
    date: [{
        startDate: new Date(), endDate: new Date(), key: 'selection'
    }],
    setDate: (val) => set(() => ({ date: val })),

    fullName: '',
    setFullName: (val) => set(() => ({ fullName: val })),

    email: '',
    setEmail: (val) => set(() => ({ email: val })),

    hotelId: '',
    setHotelId: (val) => set(() => ({ hotel: val })),

    // rooms: [{ roomId: '', roomNumbers: [''] }],
    rooms: [],
    setRooms: (val) => set(() => ({ rooms: val })),

    price: '',
    setPrice: (val) => set(() => ({ price: val })),

    payment: '',
    setPayment: (val) => set(() => ({ payment: val })),

    phone: '',
    setPhone: (val) => set(() => ({ phone: val })),

    cardNumber: '',
    setCardNumber: (val) => set(() => ({ cardNumber: val })),
}))

export default useStoreReserveForm