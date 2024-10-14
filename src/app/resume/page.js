import { resumeData } from "@/data/resume"
import styles from '@/app/page.module.css'
import Link from "next/link"


export const metadata = {
    title: 'Resume',
}

export default function Resume() {
    return (
        <div className={styles.resume}>
            <h1 className={styles.title}>Resume</h1>
            <h2 className={styles.name}>Katherine Meadows</h2>
            <h2 className={styles.subsectionTitle}>Contact Information</h2>
            <div className={styles.contact}>
                <span><strong>Email: </strong><Link href={resumeData.contactInfo.email}>{resumeData.contactInfo.email}</Link></span>
                <span><strong>Phone: </strong>{resumeData.contactInfo.phone}</span>
                <span><strong>LinkedIn: </strong><Link href={resumeData.contactInfo.linkedIn}>kmeadows3</Link></span>
                <span><strong>GitHub: </strong><Link href={resumeData.contactInfo.github}>kmeadows3</Link></span>
                <span><strong>Location: </strong>{resumeData.contactInfo.location}</span>
            </div>
            <h2 className={styles.subsectionTitle}>Technical Experience</h2>
            <div>
                {resumeData.technicalExperience.map(experience => (
                    <div key={experience.name}>
                        <h3 className={styles.entryTitle}>{experience.name}</h3>
                        <p>{experience.description}</p>
                    </div>
                ))}
            </div>
            <h2 className={styles.subsectionTitle}>Professional Experience</h2>
            <div>
                {resumeData.professionalExperience.map(experience => (
                    <div key={experience.company + '-' + experience.role}>
                        <h3 className={styles.experienceHeader}>
                            <span className={styles.company}>{experience.company}</span><span className={styles.role}>{experience.role}</span>
                            <div>
                                <span>{experience.location}</span>
                                <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                        </h3>
                        
                        <ul>
                            {experience.highlights.map(highlight => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <h2 className={styles.subsectionTitle}>Education</h2>
            <div>
                {resumeData.Education.map(education => (
                    <div key={education.name}>
                        <p className={styles.entryTitle}><span><strong>{education.name}</strong> | {education.location}</span> <span>{education.dates}</span></p>
                        <p>{education.description}</p>
                    </div>
                ))}
            </div>
            <div className={styles.footer}>&nbsp;</div>
        </div>
    )
}