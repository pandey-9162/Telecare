import React, { useState } from 'react';
import './style.css';
import cough from './cough.jpg';
import period from './period.jpg';
import performance from './performance.jpg';
import skin from './skin.jpg';
import gyne from '../../assets/gyne.svg';
import pediatric from '../../assets/pediatric.svg';
import phychi from '../../assets/psychiatric.svg';
import stomach from '../../assets/stomach.svg';
import gp from '../../assets/gp.svg';

const problems = [
  [
    { id: 1, image: cough, title: 'Cough & Cold?', price: '₹ 499', link: '#', description: 'Consult Now' },
    { id: 2, image: period, title: 'Period problems?', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 3, image: performance, title: 'issues in bed?', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 4, image: skin, title: 'Skin problems?', price: '₹ 549', link: '#', description: 'Consult Now' },
    { id: 5, image: cough, title: 'Headache?', price: '₹ 499', link: '#', description: 'Consult Now' },
    { id: 6, image: cough, title: 'Stomach issues?', price: '₹ 599', link: '#', description: 'Consult Now' },
  ],
  [
    { id: 7, image: cough, title: 'Headache?', price: '₹ 499', link: '#', description: 'Consult Now' },
    { id: 8, image: cough, title: 'Stomach issues?', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 9, image: cough, title: 'Sleep disorders?', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 10, image: cough, title: 'Allergies?', price: '₹ 549', link: '#', description: 'Consult Now' },
    { id: 11, image: cough, title: 'Fever?', price: '₹ 499', link: '#', description: 'Consult Now' },
    { id: 12, image: cough, title: 'Joint Pain?', price: '₹ 599', link: '#', description: 'Consult Now' },
  ],
  [
    { id: 12, image: cough, title: 'Fever?', price: '₹ 499', link: '#', description: 'Consult Now' },
    { id: 13, image: cough, title: 'Joint Pain?', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 14, image: cough, title: 'Rash?', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 15, image: cough, title: 'Migraine?', price: '₹ 549', link: '#', description: 'Consult Now' },
    { id: 16, image: cough, title: 'Fever?', price: '₹ 499', link: '#', description: 'Consult Now' },
    { id: 16, image: cough, title: 'Joint Pain?', price: '₹ 599', link: '#', description: 'Consult Now' },
  ],
  [
    { id: 19, image: cough, title: 'Fever?', price: '₹ 499', link: '#', description: 'Consult Now' },
    { id: 20, image: cough, title: 'Joint Pain?', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 21, image: cough, title: 'Rash?', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 22, image: cough, title: 'Migraine?', price: '₹ 549', link: '#', description: 'Consult Now' },
    { id: 23, image: cough, title: 'Fever?', price: '₹ 499', link: '#', description: 'Consult Now' },
    { id: 24, image: cough, title: 'Joint Pain?', price: '₹ 599', link: '#', description: 'Consult Now' },
  ],
];

const specialties = [
  [
    { id: 1, image: gp, title: 'General Physicians', price: '₹ 499', link: '#', description: 'Consult Now' },
    { id: 2, image: stomach, title: 'Digestion', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 3, image: gyne, title: 'Gynecology', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 4, image: gp, title: 'Dermatology', price: '₹ 549', link: '#', description: 'Consult Now' },
    { id: 5, image: phychi, title: 'Psychiatry', price: '₹ 499', link: '#', description: 'Consult Now' },
    { id: 6, image: phychi, title: 'Cardiology', price: '₹ 599', link: '#', description: 'Consult Now' },
  ],
  [
    { id: 6, image: phychi, title: 'Cardiology', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 7, image: pediatric, title: 'Pediatric', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 8, image: 'allergy.jpg', title: 'Orthopedics', price: '₹ 549', link: '#', description: 'Consult Now' },
    { id: 9, image: 'neurology.jpg', title: 'Neurology', price: '₹ 599', link: '#', description: 'Consult Now' },
    { id: 10, image: 'oncology.jpg', title: 'Oncology', price: '₹ 699', link: '#', description: 'Consult Now' },
    { id: 6, image: phychi, title: 'Cardiology', price: '₹ 599', link: '#', description: 'Consult Now' },
  ],
];

const CommonHealthConcerns = () => {
  const [currentIndexProblems, setCurrentIndexProblems] = useState(0);
  const [currentIndexSpecialties, setCurrentIndexSpecialties] = useState(0);

  const nextProblems = () => {
    setCurrentIndexProblems((currentIndexProblems + 1) % problems.length);
  };

  const prevProblems = () => {
    setCurrentIndexProblems((currentIndexProblems - 1 + problems.length) % problems.length);
  };

  const nextSpecialties = () => {
    setCurrentIndexSpecialties((currentIndexSpecialties + 1) % specialties.length);
  };

  const prevSpecialties = () => {
    setCurrentIndexSpecialties((currentIndexSpecialties - 1 + specialties.length) % specialties.length);
  };

  return (
    <>
      <div className="common-health-concerns">
        <h1>25+ Specialties</h1>
        <div className='subtitle'>
          <div className='titles'>Consult with top doctors across specialties</div>
          <div><a href="#all-symptoms" className="btn btn-outline-success see-all-symptoms">See All Symptoms</a></div>
        </div>
        <div className="slider-container">
          <button className="prev-button" onClick={prevSpecialties}>&lt;</button>
          <div className="specialties-container">
            {specialties[currentIndexSpecialties].map(specialty => (
              <div key={specialty.id} className="specialty-card">
                <img src={specialty.image} alt={specialty.title} />
                <p>{specialty.title}</p>
                <p>{specialty.price}</p>
                <a href={specialty.link}>{specialty.description}</a>
              </div>
            ))}
          </div>
          <button className="next-button" onClick={nextSpecialties}>&gt;</button>
        </div>
      </div>
      <div className="common-health-concerns">
        <h1>Common Health Concerns</h1>
        <div className='subtitle'>
          <p className='titles'>Consult a doctor online for any health issue</p>
          <div><a href="#all-symptoms" className="btn btn-outline-success see-all-symptoms">See All Symptoms</a></div>
        </div>
        <div className="slider-container">
          <button className="prev-button" onClick={prevProblems}>&lt;</button>
          <div className="problems-container">
            {problems[currentIndexProblems].map(problem => (
              <div key={problem.id} className="problem-card">
                <img src={problem.image} alt={problem.title} />
                <p>{problem.title}</p>
                <p>{problem.price}</p>
                <a href={problem.link}>{problem.description}</a>
              </div>
            ))}
          </div>
          <button className="next-button" onClick={nextProblems}>&gt;</button>
        </div>
      </div>
    </>
  );
};

export default CommonHealthConcerns;
