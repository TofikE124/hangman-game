import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// Before is used to diaply the shadow
// After is used to display 25% white on the button when hovered

const buttonStyles = cva(
  [
    'size-[200px]',
    'rounded-full',
    'overflow-hidden',
    'grid',
    'place-items-center',
    'relative',
    `after:content-[' ']`,
    'after:absolute',
    'after:inset-0',
    'after:bg-white/0',
    'hover:after:bg-white/25',
    `before:conetnt-[' ']`,
    'before:absolute',
    'before:rounded-full',
    'before:inset-0',
    'before:z-[1]',
  ],
  {
    variants: {
      color: {
        blue: ['text-white', 'bg-blue', 'before:shadow-button-blue'],
        pink: ['text-white', 'bg-button-pink', 'before:shadow-button-pink'],
      },
    },
    defaultVariants: {
      color: 'blue',
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonStyles>;

@Component({
  selector: 'icon-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input('color') color: ButtonVariants['color'];
  @Input('className') className: string = '';

  get buttonClasses(): string {
    return twMerge(buttonStyles({ color: this.color }), this.className);
  }
}
