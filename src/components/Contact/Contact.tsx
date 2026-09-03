import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Linkedin,
  Github,
  MessageSquare,
  Youtube,
  Send,
  Check,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  Copy,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { CopyButton } from '../common/CopyButton';
import { socials } from '../../data/socials';
import { useLanguage } from '../../context/LanguageContext';

export interface FormState {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
}

type FieldName = keyof FormState;

// RFC 5322 compatible regex approximation for robust email structure validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Unicode letter support allowing natural international names, spaces, periods, hyphens, and apostrophes
const NAME_REGEX = /^[\p{L}\s.'-]+$/u;

export const validateField = (name: FieldName, value: string, isAmharic = false): string | undefined => {
  const trimmed = value.trim();

  switch (name) {
    case 'name':
      if (!trimmed) {
        return isAmharic ? 'እባክዎ ሙሉ ስምዎን ያስገቡ።' : 'Please provide your full name.';
      }
      if (trimmed.length < 2) {
        return isAmharic ? 'ስም ቢያንስ 2 ፊደላት መሆን አለበት።' : 'Name must be at least 2 characters long.';
      }
      if (trimmed.length > 60) {
        return isAmharic ? 'ስም ከ60 ፊደላት መብለጥ አይችልም።' : 'Name cannot exceed 60 characters.';
      }
      if (!NAME_REGEX.test(trimmed)) {
        return isAmharic
          ? 'ስም ፊደላትንና ክፍተቶችን ብቻ መያዝ ይችላል።'
          : 'Name can only contain letters, spaces, hyphens, and apostrophes.';
      }
      return undefined;

    case 'email':
      if (!trimmed) {
        return isAmharic ? 'እባክዎ የኢሜይል አድራሻዎን ያስገቡ።' : 'Please provide your email address.';
      }
      if (trimmed.length > 100) {
        return isAmharic ? 'የኢሜይል አድራሻው በጣም ረጅም ነው (ከ100 በላይ)።' : 'Email address is too long (max 100 characters).';
      }
      if (/\s/.test(trimmed)) {
        return isAmharic ? 'የኢሜይል አድራሻ ባዶ ቦታ መያዝ አይችልም።' : 'Email address cannot contain spaces.';
      }
      if (!trimmed.includes('@')) {
        return isAmharic ? "የኢሜይል አድራሻ '@' ምልክት ማካተት አለበት።" : "Email address must include an '@' symbol.";
      }
      const parts = trimmed.split('@');
      if (parts.length !== 2 || !parts[1].includes('.')) {
        return isAmharic ? 'እባክዎ ትክክለኛ የኢሜይል ዶሜይን ያስገቡ (ለምሳሌ alex@company.com)።' : 'Please enter a valid domain (e.g. alex@company.com).';
      }
      const domainParts = parts[1].split('.');
      const tld = domainParts[domainParts.length - 1];
      if (!tld || tld.length < 2) {
        return isAmharic ? 'የኢሜይል መጨረሻ ቢያንስ 2 ፊደላት መሆን አለበት።' : 'Email top-level domain must be at least 2 letters.';
      }
      if (!EMAIL_REGEX.test(trimmed)) {
        return isAmharic ? 'እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ (ለምሳሌ name@domain.com)።' : 'Please enter a valid email address (e.g. name@domain.com).';
      }
      return undefined;

    case 'projectType':
      const validTypes = ['fullstack', 'business', 'frontend', 'job', 'other'];
      if (!validTypes.includes(value)) {
        return isAmharic ? 'እባክዎ ትክክለኛ የስራ ዘርፍ ይምረጡ።' : 'Please select a valid inquiry scope option.';
      }
      return undefined;

    case 'subject':
      if (!trimmed) {
        return isAmharic ? 'እባክዎ የጉዳዩን ርዕስ ያስገቡ።' : 'Please provide a subject for your inquiry.';
      }
      if (trimmed.length < 3) {
        return isAmharic ? 'ርዕስ ቢያንስ 3 ፊደላት መሆን አለበት።' : 'Subject must be at least 3 characters long.';
      }
      if (trimmed.length > 120) {
        return isAmharic ? 'ርዕስ ከ120 ፊደላት መብለጥ የለበትም።' : 'Subject cannot exceed 120 characters.';
      }
      return undefined;

    case 'message':
      if (!trimmed) {
        return isAmharic ? 'እባክዎ የፕሮጀክትዎን ወይም መልዕክትዎን ዝርዝር ያስገቡ።' : 'Please describe your project, inquiry, or question.';
      }
      if (trimmed.length < 10) {
        return isAmharic
          ? `መልዕክት በጣም አጭር ነው (${trimmed.length}/10 ፊደላት ቢያንስ)።`
          : `Message is too brief (${trimmed.length}/10 characters minimum).`;
      }
      if (trimmed.length > 3000) {
        return isAmharic ? 'መልዕክት ከ3,000 ፊደላት መብለጥ አይችልም።' : 'Message cannot exceed 3,000 characters.';
      }
      return undefined;

    default:
      return undefined;
  }
};

export const Contact: React.FC = () => {
  const { t, isAmharic } = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    projectType: 'fullstack',
    message: '',
  });

  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Re-run validation on errors when language switches
  useEffect(() => {
    setErrors((prevErrors) => {
      const updated: Partial<Record<FieldName, string>> = {};
      (Object.keys(prevErrors) as FieldName[]).forEach((field) => {
        if (prevErrors[field]) {
          const newErr = validateField(field, formData[field], isAmharic);
          if (newErr) updated[field] = newErr;
        }
      });
      return updated;
    });
  }, [isAmharic]);

  const validateAll = (data: FormState): Partial<Record<FieldName, string>> => {
    const newErrors: Partial<Record<FieldName, string>> = {};
    (['name', 'email', 'projectType', 'subject', 'message'] as FieldName[]).forEach((field) => {
      const error = validateField(field, data[field], isAmharic);
      if (error) {
        newErrors[field] = error;
      }
    });
    return newErrors;
  };

  const handleFieldChange = (field: FieldName, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    // If user has touched this field or attempted submission, provide live validation feedback
    if (touched[field] || submitAttempted) {
      const error = validateField(field, value, isAmharic);
      setErrors((prev) => {
        const next = { ...prev };
        if (error) {
          next[field] = error;
        } else {
          delete next[field];
        }
        return next;
      });
    }
  };

  const handleFieldBlur = (field: FieldName) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field], isAmharic);
    setErrors((prev) => {
      const next = { ...prev };
      if (error) {
        next[field] = error;
      } else {
        delete next[field];
      }
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    // Mark all interactive fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      projectType: true,
      message: true,
    });

    const validationErrors = validateAll(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus the first invalid field for seamless keyboard navigation & accessibility
      if (validationErrors.name && nameRef.current) {
        nameRef.current.focus();
      } else if (validationErrors.email && emailRef.current) {
        emailRef.current.focus();
      } else if (validationErrors.subject && subjectRef.current) {
        subjectRef.current.focus();
      } else if (validationErrors.message && messageRef.current) {
        messageRef.current.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate sending & generate direct mailto action
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmitAttempted(false);

      // Construct mailto link as an accessible fallback
      const mailtoUrl = `mailto:yaikobdiriba22@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry - ${formData.projectType}] ${formData.subject.trim()}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name.trim()} (${formData.email.trim()})\n\n${formData.message.trim()}`
      )}`;

      // Attempt popup / window mailto
      try {
        const mailWindow = window.open(mailtoUrl, '_blank');
        if (mailWindow) mailWindow.close();
      } catch {
        // Handled silently
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#080A0F]">
      <Container size="xl">
        <SectionHeading
          badge={isAmharic ? 'አግኙኝ' : 'Get In Touch'}
          title={isAmharic ? 'የስራ ወይም የፕሮጀክት ሃሳብ አለዎት?' : 'Have a project or opportunity in mind?'}
          subtitle={
            isAmharic
              ? 'ለጁኒየር የሙሉ-ቁልል አልሚ የስራ እድሎች፣ ልምምድ (Internships) እና የፍሪላንስ ፕሮጀክቶች ክፍት ነኝ።'
              : "I'm open to junior developer positions, internships, freelance projects and collaborative opportunities."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Socials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.contact.directEmail}</h4>
                  <p className="text-xs text-gray-400">{t.contact.emailResponseTime}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-mono text-gray-300">
                <span className="truncate mr-2 text-indigo-300 font-semibold">{socials.email.handle}</span>
                <CopyButton textToCopy={socials.email.handle} />
              </div>
            </div>

            {/* Social Channels List */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 shadow-2xl backdrop-blur-md space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4">
                {t.contact.otherChannels}
              </h4>

              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3 text-gray-300 text-xs font-medium">
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3 text-gray-300 text-xs font-medium">
                  <Github className="w-4 h-4 text-gray-200" />
                  <span>GitHub Repositories</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={socials.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3 text-gray-300 text-xs font-medium">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Message</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3 text-gray-300 text-xs font-medium">
                  <Youtube className="w-4 h-4 text-red-400" />
                  <span>YouTube (Yacob Tech)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Quick Status Note */}
            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">
              <span className="font-bold block mb-1">📍 {t.contact.statusNoteTitle}</span>
              <span>{t.contact.statusNoteDesc}</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 shadow-2xl backdrop-blur-md"
          >
            <h3 className="text-xl font-bold text-white mb-2">{t.contact.sendMessageTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-6">
              {t.contact.sendMessageSubtitle}
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{t.contact.success.preparedTitle}</h4>
                    <p className="text-xs text-gray-300 mt-1 max-w-md mx-auto">
                      {isAmharic
                        ? `እናመሰግናለን፣ ${formData.name}። መልዕክትዎ ዝግጁ ሆኗል፤ ወደ ${socials.email.handle} በቀጥታ ለመላክ የኢሜይል መተግበሪያዎ ይከፈታል።`
                        : `Thank you for reaching out, ${formData.name}. Your inquiry has been processed and your email client was prompted to deliver the message directly to ${socials.email.handle}.`}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitAttempted(false);
                      setTouched({});
                      setErrors({});
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        projectType: 'fullstack',
                        message: '',
                      });
                    }}
                    className="text-xs mt-2"
                  >
                    {t.contact.buttons.sendAnother}
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Validation Error Banner when submission attempted with errors */}
                  {submitAttempted && Object.keys(errors).length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-300"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{t.contact.validation.fixErrors}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold text-gray-300"
                        >
                          {t.contact.labels.name} <span className="text-rose-400">*</span>
                        </label>
                        {touched.name && !errors.name && formData.name.trim() && (
                          <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {t.contact.validation.valid}
                          </span>
                        )}
                      </div>
                      <input
                        ref={nameRef}
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        onBlur={() => handleFieldBlur('name')}
                        aria-invalid={!!(touched.name && errors.name)}
                        aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                        placeholder={t.contact.placeholders.name}
                        className={`w-full px-3.5 py-2.5 rounded-2xl border text-sm text-white placeholder-gray-500 focus:outline-hidden transition-colors ${
                          touched.name && errors.name
                            ? 'border-rose-500/80 focus:border-rose-400 bg-rose-500/[0.03]'
                            : touched.name && formData.name.trim()
                            ? 'border-emerald-500/40 focus:border-emerald-400 bg-emerald-500/[0.02]'
                            : 'border-white/10 focus:border-indigo-500 bg-white/[0.03]'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p id="name-error" role="alert" className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold text-gray-300"
                        >
                          {t.contact.labels.email} <span className="text-rose-400">*</span>
                        </label>
                        {touched.email && !errors.email && formData.email.trim() && (
                          <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {t.contact.validation.valid}
                          </span>
                        )}
                      </div>
                      <input
                        ref={emailRef}
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        onBlur={() => handleFieldBlur('email')}
                        aria-invalid={!!(touched.email && errors.email)}
                        aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                        placeholder={t.contact.placeholders.email}
                        className={`w-full px-3.5 py-2.5 rounded-2xl border text-sm text-white placeholder-gray-500 focus:outline-hidden transition-colors ${
                          touched.email && errors.email
                            ? 'border-rose-500/80 focus:border-rose-400 bg-rose-500/[0.03]'
                            : touched.email && formData.email.trim()
                            ? 'border-emerald-500/40 focus:border-emerald-400 bg-emerald-500/[0.02]'
                            : 'border-white/10 focus:border-indigo-500 bg-white/[0.03]'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p id="email-error" role="alert" className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-semibold text-gray-300 mb-1.5"
                      >
                        {t.contact.labels.inquiryScope}
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => handleFieldChange('projectType', e.target.value)}
                        onBlur={() => handleFieldBlur('projectType')}
                        className="w-full px-3.5 py-2.5 rounded-2xl bg-[#0a0a0a] border border-white/10 text-sm text-white focus:border-indigo-500 focus:outline-hidden transition-colors"
                      >
                        <option value="fullstack">{t.contact.inquiryOptions.fullstack}</option>
                        <option value="business">{t.contact.inquiryOptions.business}</option>
                        <option value="frontend">{t.contact.inquiryOptions.frontend}</option>
                        <option value="job">{t.contact.inquiryOptions.job}</option>
                        <option value="other">{t.contact.inquiryOptions.other}</option>
                      </select>
                      {touched.projectType && errors.projectType && (
                        <p id="projectType-error" role="alert" className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.projectType}
                        </p>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor="subject"
                          className="block text-xs font-semibold text-gray-300"
                        >
                          {t.contact.labels.subject} <span className="text-rose-400">*</span>
                        </label>
                        {touched.subject && !errors.subject && formData.subject.trim() && (
                          <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {t.contact.validation.valid}
                          </span>
                        )}
                      </div>
                      <input
                        ref={subjectRef}
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleFieldChange('subject', e.target.value)}
                        onBlur={() => handleFieldBlur('subject')}
                        aria-invalid={!!(touched.subject && errors.subject)}
                        aria-describedby={touched.subject && errors.subject ? 'subject-error' : undefined}
                        placeholder={t.contact.placeholders.subject}
                        className={`w-full px-3.5 py-2.5 rounded-2xl border text-sm text-white placeholder-gray-500 focus:outline-hidden transition-colors ${
                          touched.subject && errors.subject
                            ? 'border-rose-500/80 focus:border-rose-400 bg-rose-500/[0.03]'
                            : touched.subject && formData.subject.trim()
                            ? 'border-emerald-500/40 focus:border-emerald-400 bg-emerald-500/[0.02]'
                            : 'border-white/10 focus:border-indigo-500 bg-white/[0.03]'
                        }`}
                      />
                      {touched.subject && errors.subject && (
                        <p id="subject-error" role="alert" className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold text-gray-300"
                      >
                        {t.contact.labels.message} <span className="text-rose-400">*</span>
                      </label>
                      {touched.message && !errors.message && formData.message.trim().length >= 10 && (
                        <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {t.contact.validation.valid}
                        </span>
                      )}
                    </div>
                    <textarea
                      ref={messageRef}
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      onBlur={() => handleFieldBlur('message')}
                      aria-invalid={!!(touched.message && errors.message)}
                      aria-describedby="message-counter message-error"
                      placeholder={t.contact.placeholders.message}
                      className={`w-full px-3.5 py-2.5 rounded-2xl border text-sm text-white placeholder-gray-500 focus:outline-hidden transition-colors resize-none ${
                        touched.message && errors.message
                          ? 'border-rose-500/80 focus:border-rose-400 bg-rose-500/[0.03]'
                          : touched.message && formData.message.trim().length >= 10
                          ? 'border-emerald-500/40 focus:border-emerald-400 bg-emerald-500/[0.02]'
                          : 'border-white/10 focus:border-indigo-500 bg-white/[0.03]'
                      }`}
                    />
                    <div className="flex items-center justify-between text-[11px] mt-1">
                      {touched.message && errors.message ? (
                        <p id="message-error" role="alert" className="text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.message}
                        </p>
                      ) : (
                        <span className="text-gray-500">{t.contact.validation.minChars}</span>
                      )}
                      <span
                        id="message-counter"
                        className={`font-mono transition-colors ${
                          formData.message.trim().length >= 10
                            ? 'text-emerald-400'
                            : touched.message && formData.message.trim().length < 10
                            ? 'text-rose-400'
                            : 'text-gray-500'
                        }`}
                      >
                        {formData.message.length}/3000
                      </span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full text-sm"
                  >
                    {isSubmitting ? t.contact.buttons.sending : t.contact.buttons.send}
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
