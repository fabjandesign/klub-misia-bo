export function text(value) {
      if(value==null)return '';
      if(Array.isArray(value))return value.map(text).join('');
      if(typeof value==='object') {
        if(value.__html!=null)return String(value.__html).replace(/<[^>]*>/g,'');
        return text(value.text??value.html??value.children??value.name??value.url??'');
      }
      return String(value);
    }

export function embedHtml(fields) { return text(fields.content || fields.value || fields.embed?.meta?.html || fields.embed?.code || fields.html || fields.code || ''); }
