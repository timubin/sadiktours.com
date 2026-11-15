/* ==========================================================================
   sadiktours.com — Sadik Tours & Travels
   Interactive Logic: Filtering, Visa Checklist, Booking Modal, WhatsApp Funnel
   ========================================================================== */

const WHATSAPP_NUMBER = '8801700000000'; // Replace with Sadik Tours official WhatsApp number

// Visa Information Database
const VISA_DATA = {
  dubai: {
    country: 'দুবাই (সংযুক্ত আরব আমিরাত)',
    flag: '🇦🇪',
    processingTime: '৩ - ৫ কর্মদিবস',
    validity: '৩০ / ৬০ দিন ট্যুরিস্ট ভিসা',
    feeInfo: 'ভিসা ও ইন্সুরেন্স সহ সাশ্রয়ী প্যাকেজ',
    docs: [
      'ন্যূনতম ৬ মাস মেয়াদী পাসপোর্ট (স্ক্যান কপি)',
      'সদ্য তোলা সাদা ব্যাকগ্রাউন্ড পাসপোর্ট সাইজ ছবি',
      'জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন কপি',
      'রিটার্ন এয়ার টিকেট ও হোটেল বুকিং (আমরা সহায়তা করি)',
      'পেশাগত প্রমাণপত্র / ভিজিটিং কার্ড (প্রযোজ্য ক্ষেত্রে)',
      'পূর্ববর্তী ভ্রমণ ইতিহাস (থাকলে ভিসা দ্রুত হয়)'
    ]
  },
  thailand: {
    country: 'থাইল্যান্ড (ই-ভিসা / স্টিকার)',
    flag: '🇹🇭',
    processingTime: '৫ - ৭ কর্মদিবস',
    validity: 'সিঙ্গেল / মাল্টিপল এন্ট্রি',
    feeInfo: 'অ্যাম্বাসি ফি ও প্রসেসিং চার্জ প্রযোজ্য',
    docs: [
      'মূল পাসপোর্ট (কমপক্ষে ৬ মাস মেয়াদ)',
      'সদ্য তোলা ২ কপি ছবি (৩.৫ x ৪.৫ সেমি, সাদা ব্যাকগ্রাউন্ড)',
      'বিগত ৬ মাসের ব্যাংক স্টেটমেন্ট ও সলভেন্সি সার্টিফিকেট',
      'চাকরিজীবী হলে NOC / ব্যবসায়ী হলে ট্রেড লাইসেন্স (ইংরেজিতে)',
      'ভিজিটিং কার্ড ও এনআইডি কার্ডের ফটোকপি',
      'কনফার্ম এয়ার টিকেট ও হোটেল রিজার্ভেশন'
    ]
  },
  malaysia: {
    country: 'মালয়েশিয়া (ই-ভিসা)',
    flag: '🇲🇾',
    processingTime: '৩ - ৫ কর্মদিবস',
    validity: '৩০ দিন ট্যুরিস্ট ই-ভিসা',
    feeInfo: 'শতভাগ অনলাইন ই-ভিসা প্রসেসিং',
    docs: [
      'কমপক্ষে ৬ মাস মেয়াদী পাসপোর্টের পরিষ্কার স্ক্যান কপি',
      'সাদা ব্যাকগ্রাউন্ডের ডিজিটাল ছবি (৩৫ x ৫০ মিমি)',
      'বিগত ৬ মাসের ব্যাংক স্টেটমেন্ট (ন্যূনতম ব্যালেন্স ১ লাখ+)',
      'রিটার্ন ফ্লাইট টিকেট ও হোটেল বুকিং কপি',
      'এনআইডি / জন্ম নিবন্ধন ও ভিজিটিং কার্ড',
      'শিক্ষার্থীদের ক্ষেত্রে স্টুডেন্ট আইডি কার্ড'
    ]
  },
  singapore: {
    country: 'সিঙ্গাপুর (ই-ভিসা)',
    flag: '🇸🇬',
    processingTime: '৪ - ৬ কর্মদিবস',
    validity: '৩৫ - ৬৩ দিন (অ্যাম্বাসি সিদ্ধান্ত অনুযায়ী)',
    feeInfo: 'অথরাইজড এজেন্টের মাধ্যমে দ্রুত প্রসেসিং',
    docs: [
      'মূল পাসপোর্ট (ন্যূনতম ৬ মাস মেয়াদী)',
      'সদ্য তোলা ২ কপি ল্যাব প্রিন্ট ছবি (ম্যাট পেপার)',
      'V39A ইনভাইটেশন লেটার (আমাদের মাধ্যমে ব্যবস্থা করা হয়)',
      'ব্যাংক স্টেটমেন্ট ও সলভেন্সি সার্টিফিকেট (৬ মাস)',
      'NOC / ট্রেড লাইসেন্স ও ভিজিটিং কার্ড',
      'জাতীয় পরিচয়পত্রের কপি'
    ]
  },
  schengen: {
    country: 'শেনজেন / ইউরোপ ট্যুরিস্ট ভিসা',
    flag: '🇪🇺',
    processingTime: '১৫ - ২১ কর্মদিবস',
    validity: 'ভ্রমণ পরিকল্পনা অনুযায়ী',
    feeInfo: 'সম্পূর্ণ ফাইল প্রসেসিং ও অ্যাপয়েন্টমেন্ট সহায়তা',
    docs: [
      'মূল পাসপোর্ট ও পূর্ববর্তী সকল পাসপোর্ট',
      'বিগত ৬ মাসের ব্যাংক স্টেটমেন্ট (ব্যক্তিগত ও কোম্পানি)',
      'ট্যাক্স রিটার্ন (TIN / ITR) ও সম্পদের বিবরণী',
      'ট্রেড লাইসেন্স (নোটারাইজড ইংরেজি অনুবাদ) অথবা NOC',
      'ট্রাভেল মেডিকেল ইন্সুরেন্স (৩০,০০০ ইউরো কভারেজ)',
      'কভার লেটার, সম্পূর্ণ ট্যুর আইটিনারারি, ফ্লাইট ও হোটেল বুকিং'
    ]
  },
  turkey: {
    country: 'তুরস্ক (স্টিকার ও ই-ভিসা)',
    flag: '🇹🇷',
    processingTime: '৭ - ১২ কর্মদিবস',
    validity: '৯০ দিন মেয়াদী ট্যুরিস্ট ভিসা',
    feeInfo: 'বৈধ US/UK/Schengen ভিসা থাকলে ১ দিনেই ই-ভিসা',
    docs: [
      'মূল পাসপোর্ট (ন্যূনতম ৬ মাস মেয়াদী)',
      '২ কপি বায়োমেট্রিক ছবি (৫ x ৬ সেমি, সাদা ব্যাকগ্রাউন্ড)',
      'বিগত ৬ মাসের ব্যাংক স্টেটমেন্ট ও সলভেন্সি',
      'NOC / ট্রেড লাইসেন্স ও অফিসিয়াল প্যাডে ফরোয়ার্ডিং',
      'ট্রাভেল ইন্সুরেন্স, এয়ার টিকেট ও হোটেল বুকিং',
      'জাতীয় পরিচয়পত্র ও ম্যারেজ সার্টিফিকেট (পরিবারের জন্য)'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar shadow on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // 3. Package Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pkgCards = document.querySelectorAll('.pkg-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');
      pkgCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category') || '';
        if (category === 'all' || cardCat.includes(category)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 4. Interactive Visa Country Selector
  const visaBtns = document.querySelectorAll('.visa-country-btn');
  const visaDetailBox = document.getElementById('visaDetailBox');

  function renderVisaDetail(key) {
    const data = VISA_DATA[key];
    if (!data || !visaDetailBox) return;

    const docsHtml = data.docs
      .map(
        (doc) => `
      <div class="visa-doc-item">
        <i class="fa-solid fa-circle-check"></i>
        <span>${doc}</span>
      </div>`
      )
      .join('');

    visaDetailBox.innerHTML = `
      <div class="visa-detail-header">
        <div>
          <h3>${data.flag} ${data.country}</h3>
          <p style="color: var(--text-muted); font-size: 0.92rem; margin-top: 4px;">${data.feeInfo}</p>
        </div>
        <div class="visa-meta">
          <span class="visa-pill"><i class="fa-regular fa-clock"></i> ${data.processingTime}</span>
          <span class="visa-pill"><i class="fa-regular fa-calendar-check"></i> ${data.validity}</span>
        </div>
      </div>
      <h4 style="margin-bottom: 14px; color: var(--navy-900); font-size: 1.05rem;">প্রয়োজনীয় কাগজপত্র:</h4>
      <div class="visa-docs-list">
        ${docsHtml}
      </div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="openBookingModal('${data.country} ভিসা প্রসেসিং')">
          <i class="fa-solid fa-passport"></i> ভিসা আবেদন করুন
        </button>
        <a class="btn btn-whatsapp" target="_blank" rel="noopener"
           href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`আসসালামু আলাইকুম, আমি ${data.country} এর ভিসা প্রসেসিং সম্পর্কে জানতে চাই।`)}">
          <i class="fa-brands fa-whatsapp"></i> হোয়াটসঅ্যাপে কথা বলুন
        </a>
      </div>
    `;
  }

  visaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      visaBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderVisaDetail(btn.getAttribute('data-country'));
    });
  });

  // Initial Visa Render
  renderVisaDetail('dubai');

  // 5. Hero Quick Search Form -> Opens WhatsApp or Booking Modal with Pre-filled Info
  const quickSearchForm = document.getElementById('quickSearchForm');
  if (quickSearchForm) {
    quickSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const dest = document.getElementById('searchDest').value;
      const date = document.getElementById('searchDate').value || 'নির্ধারিত নয়';
      const persons = document.getElementById('searchPersons').value;
      const service = document.getElementById('searchService').value;

      const summary = `${service} — গন্তব্য: ${dest}, তারিখ: ${date}, যাত্রী: ${persons}`;
      openBookingModal(summary);
    });
  }

  // 6. Booking Modal Form Submit -> Direct WhatsApp Funnel
  const modalForm = document.getElementById('bookingModalForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pkgName = document.getElementById('modalPackageInput').value;
      const name = document.getElementById('custName').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const travelers = document.getElementById('custTravelers').value;
      const note = document.getElementById('custNote').value.trim();

      const message =
        `আসসালামু আলাইকুম সাদিক ট্যুরস (sadiktours.com)!\n` +
        `আমি নিচের সার্ভিস/প্যাকেজটি সম্পর্কে বিস্তারিত জানতে ও বুকিং করতে চাই:\n\n` +
        `📌 বিষয়: ${pkgName}\n` +
        `👤 নাম: ${name}\n` +
        `📞 মোবাইল: ${phone}\n` +
        `👥 যাত্রী সংখ্যা: ${travelers} জন\n` +
        (note ? `📝 মন্তব্য: ${note}\n` : '') +
        `\nঅনুগ্রহ করে আমাকে কল বা রিপ্লাই দিন।`;

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noopener');
      closeBookingModal();
    });
  }
});

// Modal Controls
function openBookingModal(packageName = 'কাস্টম ট্যুর প্যাকেজ') {
  const modal = document.getElementById('bookingModal');
  const titleEl = document.getElementById('modalTitle');
  const inputEl = document.getElementById('modalPackageInput');
  if (modal && titleEl && inputEl) {
    inputEl.value = packageName;
    titleEl.textContent = packageName;
    modal.classList.add('open');
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

window.addEventListener('click', (e) => {
  const modal = document.getElementById('bookingModal');
  if (e.target === modal) {
    closeBookingModal();
  }
});
