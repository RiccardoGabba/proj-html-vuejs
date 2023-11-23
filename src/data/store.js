import { reactive } from "vue";

export const store = reactive({
    Avada: [
        {
            image: 'Images/icon-1.png',
            title: 'SAME DAY APPOINTMENTS',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim'
        },
        {
            image: 'Images/icon-2.png',
            title: 'WORLD CLASS FACILITIES',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim'
        },
        {
            image: 'Images/icon-3.png',
            title: 'EXPERT DOCTORS',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim'
        },
        {
            image: 'Images/icon-4.png',
            title: 'COMPLEMENTARY THERAPIES',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim'
        },
    ],
    Doc: [
        {
            image: '../../public/Images/doctor-1.jpg',
            name: 'JON SNOW',
            role: 'Anesthesiologist',
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
        },
        {
            image: '../../public/Images/doctor-2.jpg',
            name: 'TONY STARK',
            role: 'Cardiologist',
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
        },
        {
            image: '../../public/Images/doctor-3.jpg',
            name: 'ANNA SMITH',
            role: 'Nurse Practitioner',
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
        }
    ]
})