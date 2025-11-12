import React from 'react';
import styles from './ConfirmModal.module.css';

interface ConfirmModalProps {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  open?: boolean;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title = 'Confirm',
  message = 'Are you sure?',
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  open = true,
}) => {
  if (!open) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.separator}></div>
        <p className={styles.description}>{message}</p>

        <div className={styles.buttonContainer}>
          <button onClick={onCancel} className={styles.cancelButton}>
            {cancelText}
          </button>
          <button onClick={onConfirm} className={styles.confirmButton}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
