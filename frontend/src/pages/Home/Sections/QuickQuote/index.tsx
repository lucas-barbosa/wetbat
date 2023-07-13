import { FastForward } from '@phosphor-icons/react';
import { Card } from '../../../../components/Card';
import { QuickQuoteForm } from './form';

export const QuickQuote = () => (
  <Card
    icon={<FastForward />}
    title="Quick quote"
    isDraggable>
    <QuickQuoteForm />
  </Card>
);