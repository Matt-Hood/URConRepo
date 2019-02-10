<?php
/**
 * @file
 * Contains \Drupal\rsvplist\Form\RSVPForm
 */

namespace Drupal\rsvplist\Form;

use Drupal\Core\Database\Database;
use Drupal\Core\Form\Formbase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a RSVP email form.
 */

class RSVPForm extends FormBase {
    public function getFormId() {
        return 'rsvplist_email_form';
    }
    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form,
                              FormStateInterface $form_state) {
        $node = \Drupal::routeMatch()->getParameter('node');
        $nid = $node->nid->value;
        $form['email'] = array(
            '#title' => t('Email address'),
            '#type' => 'textfield',
            '#size' => 25,
            '#description' => t("we'll send updates to the email address you provide."),
            '#required' => TRUE,
        );
        $form['submit'] = array(
            '#type' => 'submit',
            '#value' => t('RSVP'),
        );
        $form['nid'] = array(
            '#type' => 'hidden',
            '#value' => $nid,
        );
        return $form;
    }
    /**
     * {@inheritdoc}
     */

    public function validateForm(array &$form, FormStateInterface $form_state)
    {
        $value = $form_state->getValue('email');
        $value == !\Drupal::service('email.validator') -> isValid($value) ? $form_state->setErrorByName('email', t('The email address %mail is not valid', array('%mail' => $value))) : 'You have been added to the registration list';

    }

    public function submitForm(array &$form,
                               FormStateInterface $form_state) {
        $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
        db_insert('rsvplist')->fields(array(
            'mail' => $form_state->getValue('email'),
            'nid' => $form_state->getValue('nid'),
            'uid' => $user->id(),
            'created' => time(),
        ))->execute();

        drupal_set_message(t('Thank you for your RSVP, you are on the list for the event.'));
    }
}