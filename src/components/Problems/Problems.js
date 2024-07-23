import React from 'react';
import './style.css';
import cough from './cough.jpg';
import period from './period.jpg';
import performance from './performance.jpg';
import gyne from '../../assets/gyne.svg';
import pediatric from '../../assets/pediatric.svg';
import phychi from '../../assets/psychiatric.svg';
import stomach from '../../assets/stomach.svg';
import gp from '../../assets/gp.svg';
import bone from "../../assets/bone.svg";
import Dermatology from "../../assets/dermatology.svg";
import Neurology from "../../assets/nurology.svg";
import Ophthalmology from "../../assets/ophthalmology.svg";
import oncology from "../../assets/oncology.svg"
import alergy from "../../assets/alergy.svg"
import heart from "../../assets/heart.svg"
import Sleep from "../../assets/sleep.jpeg"
import Stomach from "../../assets/stomach.jpeg"
import skin from "../../assets/skin.jpeg"
import Migraine from "../../assets/migrane.jpeg"
import hyper from "../../assets/hyper.jpeg"
import Fever from "../../assets/fever.jpeg"
import Alergy from "../../assets/alergy.jpeg"
import Joint from "../../assets/joint.jpeg"
import Rash from "../../assets/rash.jpeg"



const problems = [
  { id: 1, image: cough, title: 'Cough & Cold?', price: '₹ 499', link: '/book-appointment', description: 'Consult Now' },
  { id: 2, image: period, title: 'Period problems?', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 3, image: performance, title: 'Issues in bed?', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 4, image: hyper, title: 'Headache?', price: '₹ 549', link: '/book-appointment', description: 'Consult Now' },
  { id: 5, image: skin, title: 'Skin Problem?', price: '₹ 499', link: '/book-appointment', description: 'Consult Now' },
  { id: 6, image: Stomach, title: 'Stomach issues?', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 7, image: Sleep, title: 'Sleep disorders?', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 8, image: Alergy, title: 'Allergies?', price: '₹ 549', link: '/book-appointment', description: 'Consult Now' },
  { id: 9, image: Fever, title: 'Fever?', price: '₹ 499', link: '/book-appointment', description: 'Consult Now' },
  { id: 10, image: Joint, title: 'Joint Pain?', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 11, image: Rash, title: 'Rash?', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 12, image: Migraine, title: 'Migraine?', price: '₹ 549', link: '/book-appointment', description: 'Consult Now' },
];

const specialties = [
  { id: 1, image: gp, title: 'General Physicians', price: '₹ 499', link: '/book-appointment', description: 'Consult Now' },
  { id: 2, image: stomach, title: 'Digestion', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 3, image: gyne, title: 'Gynecology', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 4, image: Dermatology, title: 'Dermatology', price: '₹ 549', link: '/book-appointment', description: 'Consult Now' },
  { id: 5, image: phychi, title: 'Psychiatry', price: '₹ 499', link: '/book-appointment', description: 'Consult Now' },
  { id: 6, image: bone, title: 'Orthopedics', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 7, image: pediatric, title: 'Pediatric', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 8, image: heart, title: 'Cardiology', price: '₹ 549', link: '/book-appointment', description: 'Consult Now' },
  { id: 9, image: Neurology, title: 'Neurology', price: '₹ 599', link: '/book-appointment', description: 'Consult Now' },
  { id: 10, image: oncology, title: 'Oncology', price: '₹ 699', link: '/book-appointment', description: 'Consult Now' },
  { id: 11, image: Ophthalmology, title: 'Ophthalmology',price: '₹ 699', link: '/book-appointment', description: 'Consult Now' },
  { id: 12, image: alergy, title: 'Allergist', price:'₹ 699', link: '/book-appointment', description: 'Consult Now' },
];

const CommonHealthConcerns = () => {
  return (
    <>
      <div className="common-health-concerns">
        <h1>25+ Specialties</h1>
        <div className="subtitle">
          <div className="titles">Consult with top doctors across specialties</div>
          <div><a href="#all-symptoms" className="btn btn-outline-success see-all-symptoms">See All Symptoms</a></div>
        </div>
        <div className="specialties-grid">
          {specialties.map(specialty => (
            <div key={specialty.id} className="specialty-card">
              <img src={specialty.image} alt={specialty.title} />
              <p>{specialty.title}</p>
              <p>{specialty.price}</p>
              <a href={specialty.link}>{specialty.description}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="common-health-concerns">
        <h1>Common Health Concerns</h1>
        <div className="subtitle">
          <p className="titles">Consult a doctor online for any health issue</p>
          <div><a href="#all-symptoms" className="btn btn-outline-success see-all-symptoms">See All Symptoms</a></div>
        </div>
        <div className="problems-grid">
          {problems.map(problem => (
            <div key={problem.id} className="problem-card">
              <img src={problem.image} alt={problem.title} />
              <p>{problem.title}</p>
              <p>{problem.price}</p>
              <a href={problem.link}>{problem.description}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommonHealthConcerns;
