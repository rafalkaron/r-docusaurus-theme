---
id: doc2
title: Topic B
---

## Formatting

### Basic

**Bold**  
*Italic*  
~~strikethrough~~

### Extended

Large text
{: .text_large}

Small text
{: .text_small}

## Lists

### Unordered list

- Item A
- Item B
- Item C

### Ordered list

1. Item A
2. Item B
3. Item C

### Definition list

Title A
: Description A

Title B
: Description B

### Items list

- Item A
- Item B
- Item C
{:.items}

## Tables

### Table with a header

|Header text|
|-|-|
| Item A | Item B |
| Item C | Item D |

### Table without a header

|-|-|
| Item A | Item B |
| Item C | Item D |

## Code

### Inline code

`@import`

### Codeblock

```scss
/* Style note containers */
.note,
.note_warning,
.note_caution,
.note_tip {
    padding: 0.5rem 1rem;
    background-color: $background-middle;
    display: block;
    border-left: $border;
    font-size: 1.4rem;
    border-radius: $border-radius;
}

/* Style note captions */
.note::before,
.note_warning::before,
.note_caution::before,
.note_tip::before {
    white-space: pre;
    font-size: inherit;
    display: inline-block;
    font-weight: bold;
    font-size: 1.4rem;
}

/* Provide note captions */
.note::before {
    content: "NOTE: ";
}

.note_warning::before {
    content: "WARNING: ";
}

.note_caution::before {
    content: "CAUTION: ";
}

.note_tip::before {
    content: "TIP: ";
}
```

## Links

[404](404)  
[Google](https://www.google.com)


## Notes

Laboris anim cupidatat do tempor fugiat qui aute magna nostrud sint reprehenderit cupidatat.
{:.note}

Irure nulla aliquip officia enim ut dolor adipisicing non adipisicing.
{:.note_tip}

Officia quis eu Lorem quis ex dolore non veniam ex ad.
{:.note_warning}

Minim officia esse nulla consectetur ut non et officia tempor consequat tempor.
{:.note_caution}

## Abbreviations

SME

## Quote

> block quote line  
> block quote line  
> block quote line