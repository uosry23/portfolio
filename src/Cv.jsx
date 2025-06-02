// components/DownloadCVButton.jsx
import { motion } from "framer-motion";

export default function DownloadCVButton() {
    return (
        <motion.a
            href="/Resume.pdf"                 // لازم يكون ملف cv.pdf موجود في مجلد public
            download="Yousry_Cv.pdf"       // اسم الملف وقت التحميل
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md cursor-pointer shadow-lg hover:bg-indigo-700 transition"
        >
            تحميل السيرة الذاتية
        </motion.a>
    );
}
